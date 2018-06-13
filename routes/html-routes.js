// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes handles the HTML page that the user gets sent to.
  // User goes to main page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../home.html"));
  });
  // User goes to page with adoptable dogs
  app.get("/dog", function (req, res) {
    res.sendFile(path.join(__dirname, "../dog.html"));
  });
  // User goes to page with info about adoption
  app.get("/adopt", function (req, res) {
    res.sendFile(path.join(__dirname, "../adopt.html"));
  });
  // User goes to page with adoption application
  app.get("/application", function (req, res) {
    res.sendFile(path.join(__dirname, "../adopt/application.html"));
  });
  // User goes to page with info about the user can help the dog rescue
  app.get("/help", function (req, res) {
    res.sendFile(path.join(__dirname, "../help.html"));
  });
  // User goes to page with info about helping by donating money
  app.get("/donate", function (req, res) {
    res.sendFile(path.join(__dirname, "../help/donate.html"));
  });
  // If no matching route is found, default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../home.html"));
  });
};