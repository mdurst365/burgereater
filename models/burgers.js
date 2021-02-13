//import ORM 
var orm = require("../config/orm.js");

var burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
                cb(res);
            });
    },
    //create
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
                cd(res);
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