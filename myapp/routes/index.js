var express = require('express');
var passport = require('passport');
var router = express.Router();
var Local = require('passport-local');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("menu");
});

router.get('/booking', function(req, res, next) {
  res.render("booking");
});

router.get('/admin', function(req, res){
  res.render("admin",{message:req.flash('message')});
});

router.post('/admin', passport.authenticate('local-signin', {
    failureRedirect: '/admin',
    failureFlash: true
  }), (req, res) => {
    if(req.user.type === "employee") {
      res.redirect('/');
    } else {
      res.redirect('/admin-page');
    }
  }
);

router.get('/userCreation', function(req, res) {
  res.render("userCreation", { message: req.flash('message') });
});

router.post('/userCreation', passport.authenticate('local-signup', {
  successRedirect: '/admin-page',
  failureRedirect: '/userCreation',
  failureFlash: true
}));

router.get('/admin-page', checkLoggedIn, function(req, res) {
    res.render("admin-page");
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

function checkLoggedIn(req, res, next) {
  if(req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports = router;
