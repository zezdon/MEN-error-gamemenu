var mongoose = require('mongoose');

// SCHEMA SETUP
var blogSchema = new mongoose.Schema({
   name: String,
   icon: String,
   description: String,
   code: String,
   game: String,
   categoryIds: String,
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ],
    categories: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Categories"
      }
   ]
});

//var Blog = mongoose.model("Blog", BlogSchema);
module.exports = mongoose.model("Blog", blogSchema);