var express = require('express');
var burger = require('burger.js');
var mysql = require("mysql");
var exphbs = require("express-handlebars");
var connection = require("./config/connection.js");
var router = express.Router();
var cat = require("../models/burger.js");
var routes = require("./controllers/burger_controller.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

