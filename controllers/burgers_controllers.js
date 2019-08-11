// Dependencies
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();
// Routes logic
router.get("/", function(req, res) {
  res.redirect("burger");
});

router.get("/burger", function(req, res) {
  burger.selectAll(function(data) {
    var object = {
      burger: data
    };
    console.log(object);
    res.render("index", object);
  });
});
// Add new burger logic
router.post("/burger/create", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(info) {
    res.redirect("/burgers");
  });
});

// Devour burger logic
router.put("/burger/update/:id", function(req, res) {
  var terms = "id = " + req.params.id;
  console.log("terms", terms);

  burger.updateOne({ devoured: req.body.devoured }, terms, function(data) {
    res.redirect("/burgers");
  });
});

module.exports = router;
