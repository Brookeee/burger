require("dotenv").config();
var keys = require("./key.js");

// Dependencies
var mysql = require("mysql");
var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.password,
    database: "burgers_db"
  });
}

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: keys.password,
//   database: "burgers_db"
// });

// mySQL connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
PORT;

// Export connection
module.exports = connection;
