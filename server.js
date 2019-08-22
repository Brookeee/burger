// Dependencies
var express = require("express");
// PORT 
var PORT = process.env.PORT || 3000;
var app = express();

// Static content for app
app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'));

//Body parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Handlebars
var exphbs = require("express-handlebars");
// Engine to call handlebars
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// Access for server to routes 
var routing = require("./controllers/burgers_controllers");
app.use(routing);

app.listen(PORT, function(){
    console.log("server listening: http://localhost:" + PORT);
});