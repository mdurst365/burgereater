//express
var express = require("express");
var dotenv = require("dotenv")
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use(routes);

//Check if the server is listening
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});