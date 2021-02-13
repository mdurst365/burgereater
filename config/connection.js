//connect to MySQL
var MySQL = require("mysql");

var connectoin = MySQL.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: process.env.PASSWORD,
    database: "burger_db"
});

//make connection
connection.connect(function(err){
    if (err) {
        console.error("Could not connect" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export connection to ORM
module.exports = connection;