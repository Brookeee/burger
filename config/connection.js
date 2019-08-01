require("dotenv").config();
var keys = require("./key.js");

// Dependencies
var mysql = require("mysql"); 

var PORT = process.env.PORT || 8080;
// Heroku connection 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: keys.password,
    database: "burgers_db"
});

// mySQL connection
connection.connect(function(error){
   if (error) throw error;
   console.log("connected as id " +connection.threadId);
});
PORT;
// Export connection
module.exports = connection;

