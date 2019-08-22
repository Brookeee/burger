// import orm connection
var orm = require("../config/orm.js");
// call orm functions
var burger = {
  // Selecting all burgers logic
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // inserting a new burger logic
  create: function(objColVal, condition, cb) {
    orm.create("burgers", objColVal, condition, function(res) {
      cb(res);
    });
  },
  // updating burger logic
  update: function(cols, value, cb) {
    orm.update("burgers", cols, value, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;
