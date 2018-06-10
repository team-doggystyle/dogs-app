// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var models  = require('../models');
var express = require('express');
var router  = express.Router();
// Dependencies
// =============================================================
var path = require("path");

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
router.post("/api/applications", function(req, res) {

});
router.delete("/api/applications", function(req, res) {

});

// Export routes for server.js to use.
module.exports = router;
