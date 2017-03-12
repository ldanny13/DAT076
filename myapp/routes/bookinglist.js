var express = require('express');
var router = express.Router();
var Booking = require('../models/bookings.js');
var router = express.Router();

// List for all bookings
router.get('/', function(req, res, next) {
    // Promised based
    Booking.findAll().then(function(booking) {
        console.log(booking);
        res.render('booklists', {
            bookinglist: booking
        });
    });
});


/**
 * add booking into database 
 */
router.post('/addbooking', function(req, res, next) {
  Booking.build(
    {
      phone: req.body.contactnr, 
      seats: req.body.seats,
      bookingdate: req.body.datepicker,
      bookingtime: req.body.timepicker,
      name: req.body.contactname
      
  }
    ).save().then(function() {
            res.redirect("/");
  }).catch(function(error){
      console.log(req.body.contactnr);
      console.log(req.body.qty);
      console.log(req.body.bookingdate);
      console.log(req.body.boookingtime);
      console.log(req.body.contactname);
  })
});

module.exports = router;
