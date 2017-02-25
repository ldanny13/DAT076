 var bcrypt = require('bcrypt-nodejs');
var mysql = require('mysql');
var db = require('../Database/dbconfig');

var connection = mysql.createConnection(db.connection);

connection.query("INSERT INTO admins (username, password) values ('test','"+ bcrypt.hashSync("test", null, null) +"')", function(err,rows){

});

console.log("Created original admin");

connection.end();
