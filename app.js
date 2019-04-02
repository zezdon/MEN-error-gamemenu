var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");

var Blog = require("./models/blog");
var Comment = require("./models/comment");
var User = require("./models/user");
var userdataDB = require("./userdata");
var gamedataDB = require("./gamedata");

//connecting local mongodb database named test
mongoose.connect('mongodb://127.0.0.1:27017/test_base_app', {useNewUrlParser: true});

//testing connectivity
mongoose.connection.once('connected', function() {
	console.log("Database connected successfully")
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static("public"));
//app.use(express.static(__dirname + '/public'));

userdataDB();
gamedataDB();

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

app.use(function(req, res, next){
    res.locals.currentUser = req.user;    
    next();
});

//==================================
// ROUTES
//==================================

app.get("/", function(req, res){
    res.redirect("login");
});

//INDEX - Show all Blogs
app.get("/blogs",isLoggedIn, function (req, res) {
    // Get all Blogs from DB
    Blog.find({}, function (err, allblogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("blogs/index", {blogs: allblogs});
        }
    });
});

//SHOW - show more info about one Blog
app.get("/blogs/:id",isLoggedIn, function(req, res){
    //find the Blog with provided ID
    Blog.findById(req.params.id).populate("comments").exec(function(err, foundBlog){
        if(err) {
            console.log(err);
        } else {
            //console.log(foundBlog);
            //render show template with that Blog            
            res.render("blogs/show", {blog: foundBlog});
        }
    })
});

// =================
// COMMENTS ROUTES
// =================

app.get("/blogs/:id/comments/new",isLoggedIn, function(req, res){
    // find blog by id
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err) {
            console.log(err);            
        } else {            
            res.render("comments/new", {blog: foundBlog});
        }
    });    
});

app.post("/blogs/:id/comments",isLoggedIn, function(req, res){   
    //lookup blog using ID
    Blog.findById(req.params.id, function(err, blog){
        if (err) {
            console.log(err)
            res.redirect("/blogs");
        } else {          
            //create new comment
            Comment.create(req.body.comment, function(err, comment){         
                if(err) {            
                    console.log(err);                    
                } else {
                    blog.comments.push(comment);
                    blog.save();
                    res.redirect("/blogs/" + blog._id);                           
                }               
            });
            //connect new comment to blog            
            //redirect blog show page            
        }
    });            
});

// ======================
// LOGIN ROUTES
// ======================

//render login form
app.get("/login", function(req, res){
    res.render("login");
});
//login logic
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/blogs",
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