
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// setting up the routes
router.get('/', function (req, res) {
  res.redirect('/index');
});

// the index page
router.get('/index', function (req, res) {
  burger.selectAll(function (data) {
    
    var burgerObject = { burgers: data };
    console.log(burgerObject);

    res.render('index', burgerObject);
  });
});

// CREATE
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function () {
    res.redirect('/index');
  });
});

// UPDATE
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function () {
    res.redirect('/index');
  });
});


module.exports = router;