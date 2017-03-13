var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');
var session = require('express-session');
var passport = require('passport');
var Local = require('passport-local');
var flash = require("connect-flash");

var index = require('./routes/index');
// bookings = require('./routes/bookinglist');

var app = express();

require('./auth/Passport')(passport);

// view engine setup
app.set('views', __dirname + '/views');
app.engine('html', mustacheExpress());
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'sushiiii', saveUninitialized: true, resave: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', index);
//app.use('/booklists',bookings);

// Catch 404 and forward to error handler
app.use(function(err, req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

// Exception handling
if (app.get('env') === 'development') {
    console.log("In development mode");
    app.use(function(err, req, res, next) {
        console.log("Error:" + err.stack);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} else {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

module.exports = app;
