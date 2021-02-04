var orm = require("../config/orm.js");

var burger = {
  selectall: function(cb) {
    orm.selectall("burger", function(res) {
      cb(res);
    });
  },
};

module.exports = burger;