var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    let devoured = data.filter((burger) => burger.devoured === 1);
    let undevoured = data.filter((burger) => burger.devoured === 0);
    res.render("index", {
      devouredList: devoured,
      undevouredList: undevoured,
    });
  });
});

router.post("/api/burger", function (req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.name, false],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  console.log("condition", condition);

  burger.update(
    {
      devoured: 1,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
