/* eslint-disable linebreak-style */

// Grabbing express
const express = require('express');

// Calling the router
const router = express.Router();
// Calling the burger file
const burger = require('../models/burger.js');


// Communicating with the DB
// Default page of Index
router.get('/', (req, res) => {
  res.redirect('/index');
});

// Index
router.get('/index', (req, res) => {
  burger.selectAll((data) => {
    // Grab and render the burgers
    const burgerObject = { burgers: data };

    res.render('index', burgerObject);
  });
});

// When creating a new burger
router.post('/burger/create', (req, res) => {
  burger.insertOne(req.body.burger_name, () => {
    res.redirect('/index');
  });
});

// Updating whether the burger had been ate
router.post('/burger/eat/:id', (req, res) => {
  burger.updateOne(req.params.id, () => {
    res.redirect('/index');
  });
});

// Export
module.exports = router;
