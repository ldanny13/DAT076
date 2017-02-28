var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');

// Create mapping between table and
// model for a TodoNote

var Bookings = sequelize.define('Bookings',{
    phone: {
        type: Sequelize.STRING(11),
        primaryKey: true
    },
    seats: {
        type: Sequelize.INTEGER
    },
    bookingdate: {
      type: Sequelize.STRING(11)
    },
    bookingtime: {
      type: Sequelize.STRING(5)
    },
    name:{
      type: Sequelize.TEXT
    }
},
{
  //freezeTableName: true // Model tableName will be the same as the model name
  timestamps: false
});
// TODO
module.exports = Bookings;
