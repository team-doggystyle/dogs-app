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
   // res.send('You\'ve reached the homepage');
   res.render("index");
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
router.get("/dogs/:id", function(req, res) {
  // dog.all(function(data) {
  //   var hbsObject = {
  //     dogs: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
});
router.get("/adopt", function(req, res) {
  res.render("adopt");
});

router.post("/adopt/application", function(req, res) {
});

router.get("/help", function(req, res) {

});
router.post("/help/donate", function(req, res) {

});
 module.exports = router;
// module.exports = function(app) {

//   // Each of the below routes just handles the HTML page that the user gets sent to.

//   // index route loads view.html
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

//   app.get("/cms", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/cms.html"));
//   });

//   // blog route loads blog.html
//   app.get("/blog", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

// };
