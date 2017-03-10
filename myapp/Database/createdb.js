'use strict';

var Sequelize = require('sequelize');

                       //ex: Sequelize('database', 'username', 'password', {
var sq = new Sequelize('restaurant','change to matching username in database','change to matching password for database', {
  host :'localhost',
  dialect : 'mysql',
  define: {
      timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sq;
