var connected = require("../config/connection.js");

var orm = {
  selectAll: function(name, table) {
    var queryStr = "SELECT * FROM " + table;
    connected.query(queryStr, function(error, data) {
      if (error) throw error;
      name(data);
    });
  },
  insertOne: function(table, col, newInput, callback){
    var queryStr = 'INSERT INTO ' + table + '(' + col + ') VALUES (?)';
    connected.query(queryStr, [newInput], function(error, data){
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
