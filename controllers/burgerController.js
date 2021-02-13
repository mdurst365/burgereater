var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");

//creating the routes
router.get("/", (req, res) => {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

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