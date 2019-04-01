var express = require("express");
var mongoose = require('mongoose');
var passport = require("passport");
var bodyParser = require("body-parser");
var User = require("./models/user");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var installDB = require("./install");

//connecting local mongodb database named test
mongoose.connect('mongodb://127.0.0.1:27017/test_base_app', {useNewUrlParser: true});

//APP CONFIG
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "2qGvS4lcjltpOiEwo6vu",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
installDB();

//==================================
// ROUTES
//==================================

app.get("/", function(req, res){
    res.render("home");
});

// RESTFUL ROUTES
app.get("/blog",isLoggedIn, function (req, res) {
    res.render("blog");
});

// LOGIN ROUTES
//render login form
app.get("/login", function(req, res){
    res.render("login");
});
//login logic
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/blog",
    failureRedirect: "/login"    
}) ,function (req, res) {    
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

// Tell Express to listen for requests (start server)
app.listen(3000, function () {
    console.log("Serving on port 3000");
});

//app.listen(process.env.PORT, process.env.IP, function(){
//    console.log("Server has started!!!");
//});