var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');

var Employees = sequelize.define('Employees',
{
  employeename :{
    type: Sequelize.STRING(100)
  },
  pnr :{
    type: Sequelize.STRING(12),
    primaryKey: true,
    uniqe: true
  },
   status : {
    type : Sequelize.STRING(100),
    defaultValue: "employee"
  }
});

//var employees = Employees.create({employeename: "test", pnr: "199506065995", employeestatus: "owner"});

//Employees.sync();

console.log("Created original admin");

module.exports = Employees;
