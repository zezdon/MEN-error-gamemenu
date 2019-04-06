var express = require("express");
var router = express.Router();
var Blog = require("../models/blog");

//INDEX - Show all Blogs
router.get("/",isLoggedIn, function (req, res) {
    var noMatch = null;
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
                
    Blog.find({ "name": regex }, function (err, allblogs) {
        if (err) {
            console.log(err);
        } else {
            if(allblogs < 1) {
                noMatch = "No Game/Blogs match that query, please try again. ";
            }
            res.render("blogs/index", {blogs: allblogs, noMatch: noMatch});
        }
    });
        
    } else {
    // Get all Blogs from DB
    Blog.find({}, function (err, allblogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("blogs/index", {blogs: allblogs, noMatch: noMatch});
        }
    });
    }
});

//SHOW - show more info about one Blog
router.get("/:id",isLoggedIn, function(req, res){
    //find the Blog with provided ID    
    Blog.findById(req.params.id).populate("comments").exec(function(err, foundBlog){
        if(err) {
            console.log(err);
        } else {
            //console.log(foundBlog);
            //render show template with that Blog            
            res.render("blogs/show", {blogs: foundBlog});
        }
    })
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;