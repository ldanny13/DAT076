var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');
var News = require('../models/news.js')
var Employees = require('../models/employees.js')
var Login = require('../models/logins.js')

//Not finalized, would create relations between models with sequelize.

/*News.hasOne(Employees);
Employees.hasOne(Login, {foreignKey: 'status', targetKey:'status'});
sLogin.belongsTo(Employees, {foreignKey: 'status', targetKey:'status'});

var news = News.create({newstext: "testetnr1", newsdate: "2017-03-13" });
var employees = Employees.create({employeename: "test", pnr: "199506065995", employeestatus: "owner"});
var admins = Login.create({username: "test", password: bcrypt.hashSync("test",null,null), status: "owner"});

News.sync();
Employees.sync();
Login.sync();*/
