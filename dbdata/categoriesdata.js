var mongoose = require("mongoose");
var User = require("../models/categories");

var data = [

{
      "id": "0",
      "name": "ALL"
},

{
      "id": "1",
      "name": "VIDEO SLOTS"
},
{
      "id": "2",
      "name": "SLOT MACHINES"	
},    
    
]

function categoriesDB() {
    //Remove all Users
    User.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed categories!");

        //add a few Users
        data.forEach(function (seed) {
            User.create(seed, function (err, user) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("added a category");
                }
            });
        });
    });
}

module.exports = categoriesDB;