//import ORM 
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    //create
    create: function(vols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            bd(res);
        });
    },
   //delete 
   delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

//export db functions to controller file
module.exports = burger;