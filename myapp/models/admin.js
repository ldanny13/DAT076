var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');


var Admins = sequelize.define('Admins',
{
  username :{
  type : Sequelize.STRING(100),
  unique: true,

},
  password : Sequelize.STRING(100),
});

/**creating a table admin if not exists and creates a username/account **/

 Admins.sync({force: true}).then(function()
 {
return Admins.create(
  {
    username: "test", password: bcrypt.hashSync("test",null,null)
  }

  );
});

console.log("Created original admin");

module.exports = Admins;
