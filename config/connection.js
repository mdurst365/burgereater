//connect to MySQL
var MySQL = require("mysql");

var connection = MySQL.createConnection({
    host: "localhost",
    port: process.env.PORT || 8080,
    user: "root",
    password: process.env.PASSWORD,
    database: "burgers_db"
});

//make connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export connection to ORM
module.exports = connection;