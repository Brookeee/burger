var connected = require("../config/connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryStr = 'SELECT * FROM ' + table + ";" ;
    console.log(queryStr);
    connected.query(queryStr, function(error, res) {
      if (error) throw error;
      cb(res);
    });
  },
  insertOne: function(table, col, newInput, callback){
    var queryStr = 'INSERT INTO ' + table + "(" + col + ") VALUES (" + newInput + ");";
    connected.query(queryStr, function(error, data) {
        if (error) throw error;
        callback(data);
    })
  },
  updateOne: function(table, col, updateInput, callback){
    var queryStr = "UPDATE " + table + 'SET ' + col + '=?' + 'WHERE ' +  updateInput;
    connected.query(queryStr, [table, col, updateInput], function(error, data){
        if (error) throw error;
        callback(data);
    })
  }
}

// Export ORM
module.exports = orm;
