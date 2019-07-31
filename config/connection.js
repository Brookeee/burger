// Dependencies
var mysql = require("mysql");
// creating mySQL connection 
var connected; 

// Heroku connection 
if(process.env.JAWSDB_URL){
connected = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connected.mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "user",
        password: "Disney=100%",
        database: "burgers_db"
    })
};

// mySQL connection
connected.connect(function(error){
    if (error) {
        console.log("mySQL connection error " + err.stack);
        return;
    }
    console.log("Connected to mySQL database with id: " + connected.threadId);
});

// Export connection
module.exports = connected;

