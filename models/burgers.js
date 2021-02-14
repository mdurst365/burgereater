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
            cb(res);
            });
    },
    //update
    udpate: (colVals, condition, cb) => {
        orm.update("burgers", colVals, condition, (res) => {
            cb(res);
        })
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