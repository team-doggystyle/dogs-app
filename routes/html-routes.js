// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

var models  = require('../models');
var express = require('express');
var router  = express.Router();
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
// router.get("/dogs/:id", function(req, res) {
 
// });
router.get("/dogs/addnewdog", function(req, res) {
  res.render("addnewdog");
});
router.post("/dogs/addnewdog", function(req, res) {
  models.dog.create({ 
    name: req.body.name,
    breed: req.body.breed,
    age_years: req.body.age_years,
    age_months: req.body.age_months,
  })
    // pass the result of our call
    .then(function(dbDog) {
      // log the result to our terminal/bash window
      // console.log(dbDog);
      // console.log("dbDog.dataValues.name", dbDog.dataValues.name)
      var hbsObject = { name: dbDog.dataValues.name };
      res.render("addnewdog", hbsObject);


      // $(".form-helper").text(dbDog.dataValues.name + " has been added!");
      // // displayUpdate(dbDog.dataValues.name);
      // // redirect
      // res.redirect("/dogs/addnewdog");
    });
});

// function displayUpdate(dogName) {
//   $(".form-helper").html(dogName + " has been added!");
// }

// router.get("/adopt", function(req, res) {
//   res.render("adopt");
// });

// router.post("/adopt/application", function(req, res) {
// });

// router.get("/help", function(req, res) {

// });
// router.post("/help/donate", function(req, res) {

// });
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
