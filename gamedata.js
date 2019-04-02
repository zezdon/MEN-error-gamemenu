var mongoose = require("mongoose");
var Blog = require("./models/blog");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Starburst", 
        icon: "images/game-icon/starburst.jpg",
        description: "Starburst is a high paced slot with some nice new features including a Starburst Wild feature. It has 5-reels and 10-bet lines and Traditional Wilds are replaced with an innovative new Starburst Wild which appear on reels 2, 3 or 4 and expand over the entire reel and remain in place for up to 3 re-spins giving you a much better chance of hitting a HUGE win!",
        code: "Starburst"
    },
    {
        name: "Jack Hammer", 
        icon: "images/game-icon/jackhammer.jpg",
        description: "Jack Hammer is a 25-line, 3-row video slot using 15 independent reels set in the gritty, glamorous underworld of a crime fighting private eye.The game features Sticky Wins, Free Spins and Wild Substitutions.",
        code: "jackhammer"       
    },
    {
        name: "Jack and the Beanstalk", 
        icon: "images/game-icon/deadoralive.jpg",
        description: "We is proud to present Jack and the Beanstalk. This game has a new feature called walking wilds which you will find in the main gameplay of this amazing game When a wild symbol is placed on the reels it will travel one reel at a time unti it leaves the left most reel, hence the name walking wilds! There are also in game free spins, where the main feature is to collect keys to unlock the different wild functionalities.",
        code: "jackandbeanstalk"       
    },
    {
        name: "Dead or Alive", 
        icon: "images/game-icon/jackandbeanstalk.jpg",
        description: "The Elements slot has an Avalanche meter which increases by one for each successive fall until it reaches the maximum of 4. After 4 successive Avalanches one of the 4 Free Falls Storm modes is triggered. These are the Fire Storm mode, Air Storm mode, Earth Storm mode, and Water Storm mode. The colours of the Avalanche meter match the leading element in the current game round.",
        code: "deadoralive"       
    },
    {
        name: "Twin Spin", 
        icon: "images/game-icon/twinspin.jpg",
        description: "The Twin Spin video slot has a Las Vegas theme brought into the 21st Century! Each spin starts with identical, adjacent twin reels that are linked together. During the spin the twin reels can expand to become triplet, quadruplet or even quintuplet reels. The unique reel synchronising and linking feature that appears on every single spin and the 243 ways to win makes for massive payouts!",
        code: "twinspin"       
    }
    
]

function seedDB(){
   //Remove all blogs
   Blog.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed blogs!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few blogs
            data.forEach(function(seed){
                Blog.create(seed, function(err, blog){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a blog");
                        //create a comment
                        Comment.create(
                            {
                                text: "This is just a test comment",
                                author: "Administrator"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    blog.comments.push(comment);
                                    blog.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;