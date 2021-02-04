var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger
    .selectall(function (data) {
      let devoured = data.filter((burger) => burger.devoured === 1);
      let undevoured = data.filter((burger) => burger.devoured === 0);
      res.render("cards/burger-list", {
        devouredList: devoured,
        undevouredList: undevoured,
      });
    })
});

module.exports = router;
