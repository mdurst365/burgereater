//import ORM 
var orm = require("../config/orm.js");

var burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
                cb(res);
            });
    },
    //create
    create: (vols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
                bd(res);
            });
    },
   //delete 
   delete: (condition, cb) => {
       orm.delete("burgers", condition, (res) => {
               cb(res);
           });
   }
};

//export db functions to controller file
module.exports = burger;