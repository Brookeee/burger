// Dependencies
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();
// Routes logic
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var object = {
            burgers: data
        };
        console.log(object);
        res.render("index", object);
    });
});
// Add new burger logic
router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
        res.json({ id: result.inserId});
    });
});

// Devour burger logic 
router.put("/api/burgers/:id", function(req, res){
    var terms = "id = " + req.params.id;
    console.log("terms", terms);

    burger.updateOne({devoured: req.body.devoured }, term, function(result){
        if (result.changedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
