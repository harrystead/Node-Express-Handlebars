
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "harryjack1214",

  database: "burgers_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected via: " + connection.threadId);
});

module.exports = connection;