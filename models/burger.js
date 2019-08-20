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
  insertOne: function(objColVal, condition, cb) {
    orm.insertOne("burgers", objColVal, condition, function(res) {
      cb(res);
    });
  },
  // updating burger logic
  updateOne: function(cols, value, cb) {
    orm.updateOne("burgers", cols, value, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;
