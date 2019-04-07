

var categoriesSchema = mongoose.Schema({
      
    id: String,    
    name: string
    
});
    
module.exports = mongoose.model("Categories", categoriesSchema);