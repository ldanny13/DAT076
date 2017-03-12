var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');
var Employees = require('../models/employees.js');


var Logins = sequelize.define('Logins',
{
  username :{
  type : Sequelize.STRING(100),
  unique: true,
  primaryKey: true
},
  password : Sequelize.STRING(100),
  status : {
    type : Sequelize.STRING(100),
    defaultValue : "employee"
  }
  /*status : {
    type : Sequelize.STRING(100),
    references: {
      model: Employees,
      key : "status"
    }
  }*/
});

//Logins.sync();

console.log("Created original admin");

module.exports = Logins;
