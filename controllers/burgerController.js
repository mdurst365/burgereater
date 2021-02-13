var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

//render the index handlebars file
router.get("/", (req, res) => {
      res.render("index");
      
//get all burgers
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


//create a burger
router.post("/api/burgers", (req, res) => {
    burger.create([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

//udpate a burger
burger.update({
    devoured: req.body.devoured
}, condition, (result) => {
    if (result.changedRows === 0) {
        return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//delete a burger
router.delete("/api/burger/:id", (req, res) => {
    var condition = "id = " + req.params.id;
  
    cat.delete(condition, (result) => {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

   //export for server.js
   module.exports = router;