var express = require("express");
var router = express.Router();
var Blog = require("../models/blog");

//INDEX - Show all Blogs
router.get("/",isLoggedIn, function (req, res) {
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
router.get("/:id",isLoggedIn, function(req, res){
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

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;