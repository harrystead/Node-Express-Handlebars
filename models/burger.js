var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
      console.log(res)
    });
  },
};

module.exports = burger;