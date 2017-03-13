var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var admin = require('../models/logins.js');

module.exports = function(passport){

  passport.serializeUser(function(user, done) {
    console.log("serializing " + user.username);
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    console.log("deserializing " + obj);
    done(null, obj);
  });

  //Check the database for a user and authenticates accordingly
  passport.use('local-signin',new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
      },
    function(req, username, password, done) {
      admin.findOne({
        where: {
          'username': username
        }
      }).then(function (user) {
        if (user == null) {
          return done(null, false, req.flash('message','No user found'));
        }

        if (bcrypt.compareSync(password, user.password)) {
          return done(null, user)
        }

        return done(null, false, req.flash('message','Wrong password'));
      }).catch(function(err) {
        console.log("Wasen't able to authenticate user");
      })
    }
  ))

  //Adds a new user to the database, makes sure the username
  //isn't already in use.
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  },
  function (req, username, password, done){
  admin.findOne({
    where: {
      'username' : username
    }
  }).then(function(user) {
    if(user != null) {
      return done(null,false, req.flash('message','That username is already in use') );
    } else {

      admin.create({
        username: username,
        password: bcrypt.hashSync(password,null,null)
      }).then(function(user) {
        return done(null, user, req.flash('message','User created'));
      }).catch(function(err) {
        console.log("Could not creat user");
      })
    }
  }
)}
))
};
