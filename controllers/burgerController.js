var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");

//creating the routes
router.get("/", (req, res) => {
      res.render("index");
  });

  //export for server.js
  module.exports = router;