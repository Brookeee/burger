// Dependencies
var express = require("express");

var app = express();
// PORT 
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Handlebars
var exphbs = require("express-handlebars");
// Engine to call handlebars
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");


app.listen(PORT);