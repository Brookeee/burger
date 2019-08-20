// Dependencies
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// Routes logic
// router.get("/", function(req, res) {
//   res.redirect("burger");
// });

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var object = {
      burger: data
    };
    console.log(object);
    res.render("index", object);
  });
});

// Put route to update burgers when eaten or recreated
router.put("/api/burger/:id", function(req, res) {
  var terms = req.params.id;
  console.log(terms);
  console.log(req.bod);

  burger.updateOne(req.body.devoured, condition, function(result) {
    console.log(result);
    if (result.changedRows === 0) {
      return res.status(200).end();
    } else {
      res.status(200).end();
    }
  });
});

// Add new burger logic
router.post("/api/burger", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    function(result) {
      res.json({ id: result.insertId });
    }
  );
});

// "burger_name"], [req.body.burger_name], function(info) {
//     res.redirect("/burger");
//     res.json(info);
//   });
// });
// } devoured: req.body.devoured }, terms, function(data) {
//   res.redirect("/burger");
//   res.json(data);
// });

// Export
module.exports = router;
