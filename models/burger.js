// import orm connection
var orm = require("../config/orm.js");
// call orm functions
var burger = {
  // Selecting all burgers logic
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // inserting a new burger logic
  insertOne: function(col, val, cb) {
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  // updating burger logic
  updateOne: function(burgObj, value, cb) {
    orm.updateOne("burgers", burgObj, value, function(res) {
      cb(res);
    });
  }
};

// Removing burger db logic..

module.exports = burger;
