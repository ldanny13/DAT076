var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');

// Create mapping between table and
// model for a Comments

var Comments = sequelize.define('Comments',{
    name:{
      type: Sequelize.STRING
    },
    content:{
      type: Sequelize.STRING
    },
    rating:{
      type: Sequelize.INTEGER
    },
    date:{
      type: Sequelize.STRING
    }
},
{
  timestamps: false
});

//Comments.sync();


module.exports = Comments;
