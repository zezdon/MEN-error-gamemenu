var mongoose = require('mongoose');

// SCHEMA SETUP
var categoriesSchema = mongoose.Schema({
      
    id: String,    
    name: String
    
});
    
module.exports = mongoose.model("Categories", categoriesSchema);