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
  //Used to creat association between login and employees
  //Was not finished due to time constraints.

  /*status : {
    type : Sequelize.STRING(100),
    references: {
      model: Employees,
      key : "status"
    }
  }*/
});

Logins.sync();

//var admins = Logins.create({username: "test", password: bcrypt.hashSync("test",null,null), status: "owner"});

console.log("Created original admin");

module.exports = Logins;
