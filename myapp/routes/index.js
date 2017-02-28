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
    successRedirect: '/admin-page',
    failureRedirect: '/admin',
    failureFlash: true
  })
);

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
