var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');


var News = sequelize.define('News',
{
  newstext :{
  type : Sequelize.STRING
  },
  newsdate: {
   type : Sequelize.STRING(10)
   }
});

News.sync();

console.log("Created original admin");

module.exports = News;
