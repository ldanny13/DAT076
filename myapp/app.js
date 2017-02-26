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

var app = express();

require('./Controllers/Passport')(passport);

// view engine setup
app.set('views', __dirname + '/views');
app.engine('html', mustacheExpress());
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/javascripts'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
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

//require('./routes/index.js')(app,passport);



module.exports = app;
