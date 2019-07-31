// import orm connection 
var orm = require("../config/orm");
// call orm functions 
var burger = {
    // Selecting all burgers logic 
    selectAll: function(name, table){
        orm.selectAll("burgers", name, table, function(res){
            console.log(res);
        })
    },
    // inserting a new burger logic 
    insertOne: function(table, col, newInput, callback){
        orm.insertOne("burgers", table, col, newInput, function(res){
            callback(res);
        })
    },
    // updating burger logic
    updateOne: function(table, col, updateInput, callback){
        orm.updateOne("burgers", table, col, updateInput, function(res){
            callback(res);
        });
    },
};

module.exports = burger;





