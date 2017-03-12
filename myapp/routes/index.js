var express = require('express');
var passport = require('passport');
var router = express.Router();
var Local = require('passport-local');
var Book = require('./bookinglist.js');
var Comments = require('../models/comments.js')

/** using bookinglist and its methods */
router.use('/booklists', Book);

/* routes to render views on user interaction */
router.get('/', function(req, res, next) {
  res.render("menu");
});

router.get('/booking', function(req, res, next) {
  res.render("booking");
});

router.get('/comments', function(req, res, next) {

  Comments.findAll().then(function(comments){
    res.render('comments',{
      comments:comments
    });
  });
});

router.get('/lunch', function(req, res, next) {
  res.render("lunch");
});

router.get('/newsfeed', checkLoggedIn, function(req, res, next) {
  res.render("newsfeed");
});

router.get('/alacarte', function(req, res, next) {
  res.render("alacarte");
});

router.get('/information', function(req, res, next) {
  res.render("information");
});

router.get('/admin', function(req, res){
  res.render("admin",{message:req.flash('message')});
});

/*Adds a comment to the comment window*/
router.post('/add', function(req, res, next){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var rate = parseInt(req.body.star);
  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
    }
    if(mm<10){
      mm='0'+mm;
    }
    var today = dd+'/'+mm+'/'+yyyy;
  Comments.build({name: req.body.name, content: req.body.content,rating: rate, date: today}).save().then(function(){
    res.redirect("/");
  }).catch(function(error){
    console.log(error);
  })
});

/*Routes for user authentication and creation */
router.post('/admin', passport.authenticate('local-signin', {
    failureRedirect: '/admin',
    failureFlash: true,
  }), (req, res) => {
    if(req.user.status === "employee") {
      res.redirect('/newsfeed');
    } else {
      res.redirect('/admin-page');
    }
  }
);

router.get('/userCreation', checkLoggedIn, function(req, res) {
  res.render("userCreation", { message: req.flash('message') });
});

router.post('/userCreation', passport.authenticate('local-signup', {
  successRedirect: '/userCreation',
  failureRedirect: '/userCreation',
  failureFlash: true,
  successFlash: true
}));

router.get('/admin-page', checkAdminLoggedIn, function(req, res) {
    res.render("admin-page");
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

/*Used to ensure that we are logged into a page
checkAdminLoggedIn makes sure we are an admin
checkLoggedIn just checks if we are a user*/
function checkAdminLoggedIn(req, res, next) {
  if(req.user.status === "owner")
    return next();
  res.redirect('/');
}

function checkLoggedIn(req, res, next) {
  if(req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports = router;
