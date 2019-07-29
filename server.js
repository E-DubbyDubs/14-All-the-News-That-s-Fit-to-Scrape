let express = require('express'); // Express Server
let bodyParser = require('body-parser'); // Post Body Request
let exphbs = require('express-handlebars'); // Templating Engine
// let logger = require("morgan"); // Logger
var db = require("./models"); // Require all models
// let cheerio = require('cheerio'; // Web Scrapper
// let mongoose = require('mongoose'; // MongoDB ORM
// let db from "./models"; // Require all models

/////////////////////////////////////////////// /* Set Up Variables*/ //////////////////////////////////////////////////////////

let PORT = process.env.PORT || 8080; // Set Default Port for Express and Heroku
let app = express(); // Initialize Express

/////////////////////////////////////////////// /* Configure middleware */ //////////////////////////////////////////////////////////

// app.use(logger("dev")); // Use morgan logger for logging requests
app.use(bodyParser.urlencoded({ extended: false })); // Use body-parser for handling form submissions
app.use(bodyParser.json());
app.use(express.static("public")); 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/webScrapperController.js")(app);


app.listen(PORT, ()=>{
    console.log(`App listening on PORT ${PORT}`);
})
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
