var express = require("express");
var router = express.Router({mergeParams: true});
var Blog = require("../models/blog");
var Comment = require("../models/comment");

// =================
// COMMENTS ROUTES
// =================

//Comments new
router.get("/new",isLoggedIn, function(req, res){
    // find blog by id
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err) {
            console.log(err);            
        } else {            
            res.render("comments/new", {blog: foundBlog});
        }
    });    
});

//Comments Create
router.post("/",isLoggedIn, function(req, res){   
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
        }
    });            
});

//middleware
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;