var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');

var Booking = sequelize.define('Bookings',{
  phone: {
    type: Sequelize.STRING(11),
    primaryKey: true
  },
  seats: {
    type: Sequelize.INTEGER
  },
 bookingdate: {
    type: Sequelize.STRING(10)
  },
  bookingtime: {
    type: Sequelize.STRING(5)
  },
  name: {
    type: Sequelize.STRING
  }
});
