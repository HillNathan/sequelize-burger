// SET EXPRESS ENVIRONMENT
const express = require('express')
const app = express()

var logger = require('./winston.js');
// var winston = require('winston'); // for transports.Console

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SERVE UP STATIC FILES
app.use(express.static("public"));

//  SET UP HANDLEBARS
const expHandlebars = require('express-handlebars')
app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// SET UP THE ROUTER
const router = require('../controllers/burger_controller.js')

// ADD IN WINSTON AS MIDDLEWARE LOGGER
app.use(logger);

// START USING THE ROUTER WITH THE MIDDLEWARE LOGGER INCLUDED
app.use(router)

module.exports = app;