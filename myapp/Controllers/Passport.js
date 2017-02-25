var LocalStrategy = require('passport-local').Strategy;

var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var db = require('../Database/dbconfig');
var connection = mysql.createConnection(db.connection);

//connection.query('USE' + db.database);

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    console.log("serializing " + user.username);
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    console.log("deserializing " + obj);
    done(null, obj);
  });

  passport.use('local-signin', new LocalStrategy({
      usernameField : 'username',
      passwordField : 'password',
      passReqToCallback : true
    },
    function(req, username, password, done) {
      connection.query("SELECT * FROM admins WHERE username = ?", [username], function(err, rows){
          if(err) {
            return done(err);
          }
          if(!rows.length) {
            return done(null, false, req.flash('loginMessage', 'No user found.'));
          }

          if(!bcrypt.compareSync(password, rows[0].password)) {
            return done(null, false, req.flash("loginMessage", 'You entered the wrong password'));
          }

          return done(null, rows[0]);
      });
    })
  );
};
