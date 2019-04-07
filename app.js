var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");

var Blog = require("./models/blog");
//var Categories = require("./models/categories");
var Comment = require("./models/comment");
var User = require("./models/user");
var userdataDB = require("./dbdata/userdata");
var gamedataDB = require("./dbdata/gamedata");
//var categoriesdataDB = require("./dbdata/categoriesdata");

//requring routes
var commentRoutes = require("./routes/comment");
var blogRoutes = require("./routes/blog");
var indexRoutes = require("./routes/index");

//connecting local mongodb database named test
mongoose.connect('mongodb://127.0.0.1:27017/test_base_app', {useNewUrlParser: true});

//testing connectivity
mongoose.connection.once('connected', function() {
	console.log("Database connected successfully")
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use('*/images',express.static('public/images'));
app.use('*/stylesheets',express.static('public/stylesheets'));
//app.use('*/js',express.static('public/js'));

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

app.use("/", indexRoutes);
app.use("/blogs" , blogRoutes);
app.use("/blogs/:id/comments" , commentRoutes);

// Tell Express to listen for requests (start server)
app.listen(3000, function () {
    console.log("Serving on port 3000");
});

//app.listen(process.env.PORT, process.env.IP, function(){
//    console.log("Server has started!!!");
//});