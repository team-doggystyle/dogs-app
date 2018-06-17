// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var db  = require('../models');
var express = require('express');
var router  = express.Router();
// Dependencies
// =============================================================
var path = require("path");
console.log("Test")

// Routes
// =============================================================
router.get("/api/dogs/", function(req, res) {

});
router.get("/api/dogs/:id", function(req, res) {

});
router.get("/api/dogs/adopted", function(req, res) {

});
router.get("/api/applications", function(req, res) {

});

//Receiving request and sending responses
//Post adds new data
router.post("/api/applications", function(req, res) {
    console.log(req.body)
    db.Application.create(req.body)
    .then(function(data){
        console.log(data)
        res.json({
            note: "Appicant is added to the database"
        })
    })
});

router.delete("/api/applications", function(req, res) {

});

// Export routes for server.js to use.
module.exports = router;
