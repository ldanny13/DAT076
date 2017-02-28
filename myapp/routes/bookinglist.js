var express = require('express');
var router = express.Router();
var Booking = require('../models/bookings.js');

var router = express.Router();

// List for current user
router.get('/', function(req, res, next) {
    // Promised based
    Booking.findAll().then(function(booking) {
        console.log(booking);
        res.render('booklists', {
            bookinglist: booking
        });
    });
});

module.exports = router;
