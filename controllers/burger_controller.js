// SET EXPRESS ENVIRONMENT FROM SERVER.JS
const express = require('express');
const router = express.Router();
console.log('router imported...');

// IMPORT THE BURGER CONTROL MODULE DO ACCESS THE DATABASE CALLS
const db = require('../models');

// router for the app goes here

// get route for all burgers
router.get("/", function(req, res) {
    console.log('Route "/" with method GET.' )
    db.burgers.findAll({}).then(response => {
        let burgerObj = { burgers: response }
        res.render("index", burgerObj);
    })
});

//post route to update a burger
router.post("/add", function(req, res) {
    console.log('Route "/" with method POST.' )
    db.burgers.create(req.body).then(response => {
        res.redirect('/')
    })
});

// post route to add a new burger
router.post("/update", function(req, res) {
    console.log('Route "/add" with method POST.' )
    db.burgers.update({ devoured: true },
        { where: { id: req.body.id } }).then(response => {
        console.log(response.affectedRows + " rows updated in the database.")
        res.redirect('/')
    })
});

// post route to delete a burger
router.post("/del", function(req,res) {
    console.log('Route "/del" with method POST.' )
    db.burgers.update({ deleted: true },
        { where: { id: req.body.id } }).then(response => {
        console.log(response.affectedRows + " rows updated in the database.")
        res.redirect('/')
    })
})

// API route to return all burgers in the database as a JSON object
router.get("/api/burgers", function(req,res) {
    console.log('API GET route hit to return all burgers as JSON.')
    db.burgers.findAll({}).then(response => {
        let burgerObj = { burgers: response }
        res.json(burgerObj);
    })
})

module.exports = router;
