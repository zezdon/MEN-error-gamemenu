var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//==================================
// ROUTES
//==================================

router.get("/", function(req, res){
    res.redirect("login");
});

// ======================
// LOGIN ROUTES
// ======================

//render login form
router.get("/login", function(req, res){
    res.render("login");
});
//login logic
//middleware
router.post("/login", passport.authenticate("local", {
    successRedirect: "/blogs",
    failureRedirect: "/login"    
}) ,function (req, res) {    
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;