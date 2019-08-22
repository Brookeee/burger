// Dependencies

var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// Routes logic
// router.get("/", function(req, res) {
//   res.redirect("burger");
// });

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsobject = {
      burger: data
    };
    console.log(hbsobject);
    res.render("index", hbsobject);
  });
});

// Add new burger logic
router.post("/api/burgers", function(req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function(result) {
      res.redirect("/");
      // res.json({ id: result.insertId });
    }
  );
});

// Put route to update burgers when eaten or recreated
router.put("/api/burgers/:id", function(req, res) {
  var condition = req.params.id;
  console.log("condition", condition);
  // console.log(req.body);

  burger.update({ devoured: true }, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// Export
module.exports = router;
