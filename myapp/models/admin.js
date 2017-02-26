var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');


var Admins = sequelize.define('admins',
{
  username :{
  type : Sequelize.STRING(100),
  unique: true
},
  password : Sequelize.STRING(100)
})

/*Admins.sync();

var admins = Admins.create({username: "test", password: bcrypt.hashSync("test",null,null)});
*/

console.log("Created original admin");

module.exports = Admins;
