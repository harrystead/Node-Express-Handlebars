const connection = require("./connect");

const orm = {
    all(tableInput, cb) {
      const queryString = `SELECT * FROM burgers`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
        console.log(result);
      });
    },
}


module.exports = orm;