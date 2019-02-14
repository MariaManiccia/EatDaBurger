// Main JS file

// grabbing express
const express = require("express");

// opening the port
const PORT = process.env.PORT || 3030;

// calling express
const app = express();

// giving the app direction
app.use(express.static(__dirname + "/public"));

// break apart into JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// express-handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// router
let router = require('./controllers/burgerController.js');
app.use('/', router);


// communicate connection
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

