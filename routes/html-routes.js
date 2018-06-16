// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
var models  = require('../models');
var express = require('express');
var router  = express.Router();
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
router.get("/", function(req, res) {
   res.render("home");
});

router.get("/home", function(req, res) {
   res.render("home");
});

router.get("/dogs", function(req, res) {
  models.dog.findAll({
    // where: {
    //   adopted: false
    // }
  }).then(function(dogs) {
    var hbsObject = {
      dogs: dogs
    };
    console.log(hbsObject);
    res.render("dogs", hbsObject);
  });
});
// router.get("/dogs/:id", function(req, res) {
 
// });
router.get("/dogs/addnewdog", function(req, res) {
  res.render("addnewdog");
});

router.get("/adopt", function(req, res) {
  res.render("adopt");
});

router.get("/about", function(req, res) {
  res.render("about");
});

router.get("/application", function(req, res) {
  // FIXME: CHANGE LINE BELOW TO DELIVER TEMPLATE, NOT STATIC HTML
  res.render("application");
});

// router.post("/adopt/application", function(req, res) {
// });

router.get("/donate", function(req, res) {
      res.render("donate")
});
// router.post("/help/donate", function(req, res) {



// });
 module.exports = router;