var mongoose = require("mongoose");
var User = require("../models/user");

var data = [

{

	"username": "rebecka",
    "name": "Rebecka Awesome",
    "avatar": "images/avatar/rebecka.jpg",
    "event": "Last seen gambling on Starburst.",
	"salt": "767d61311f471aee405f5a64b6aba1a0889ab98f25ac766ec2933f8324379c7e",
	"hash": "8feebf89573d5c3097c204469b4c46eb01ec9f5f2824cee48f83b950f8fc518fa789f71f18d0dde873e5543ce0527fe32e22a894da69d95daeaa149b6dbdd2924fa95dc78c6c2f7380d40d07ed17402949f34ddbbbb0bebdc1d3f21bb386e73d63d5913f5a0e871dd426cbf9ca9ee4d86c78a4c57780d84eacce7c66bddd99801ff0c41356b234ba1f331796a1548aef5c501d4095a65f719f2cdd901024a2c19b34b89254a7b9a5f065e8de9de1cf5448dfc70a7291e540af0682cfe977f68b401f226041a9e56d7ed88ac6eb263159db19703dc3075ec99e569f762749791b34b142b7e79f41c80a7885ec09660552a1019f9d7be4ef2d8e11f1c5566dcc388fb8061d182bae90e4ae50d867e3266d98b1e627c52fe5ed3ebe061f19d4a03de19e8d7c2b0133323eba64d63610a61cdaba896084ce7896e5c8633fb817aacac22b464089741c2b04ebe106bf46f8e8a685728943ae78a0d5324230087fceba87278c837bf650158e48c868f587350f9ffa4701b11cc6b0bb32d6be0472f9bae757a6d3d7706add6b63606601587fcbd200f68643fe1dbd1e44c383a0823ecaa26348385d088fae8b704928b042f0b199aeb20328c49de7005c7f997384940d425b2017229edde7304624e3227122975b21c499c5c274404a563f0b8bcdcc2c943a3cd85504d904d20a1cc73a59f63da70e24a93187295b0e2bb4f5c34dcfa5",
	"__v": 0
},

{

	"username": "eric",
    "name": "Eric Beard",
    "avatar": "images/avatar/eric.jpg",
    "event": "I saw you won 500 SEK last time!",
	"salt": "8c954ccb595c9f9de584f9b17a829c495e7d7244cb8d7631a694de2fca39192a",
	"hash": "69c7db9ff97dacd7ca45cb5d31f2444a1ad774b88620fc7d254fa267656611fc3a236f1ec8acf3b9d115d4580cd969d9f77c88fdc92c2f34c6d44f230b15f7f71b0352edb3a5a8884e6ffe8194fd253c8ef55dd690b0a8a492014160a17903a412514d1235ba12059d469ca649e5b7d2b9dc93ed73728581592bcb74d536c1fa15678c6a491727eea98739f3c4e179c8fe3f74ace233af5b6f203130c399e5b62eeffbc0c34b3e55c42ef523106b217c0f98d77828e6b656863d54bdc18dd968b5f5f98827e2148241ad834381da289c983b2f9ae361a369444f20eb6059ad32a95c3d0be5045d88635b8dc9088e040f44a2ab985b974a505600d30c457d5460b4a1b469dec2e0131b6eb1490d9b8fac72bada25ecdee67bd4a87d72ff543af5728c187f65a4fd998e995effb68e66d5aae59925ddb03e27c25a7b24eb2769c73a0f923ab82a49293532cd4311b37ece04ac2fb0a07b1d3ab195c27af3cfb67a41ed35e61ac01fea5b6c2869ff4750ec930010408b4bbc967a42f716ceb8cf4897ea054750da6aadaeff170356d577a14b84ab847f445d87cc83c6a57b11affc79e6be727a402c04eeb799c364dd68be33795ef3b9ad275d757ef91c238d23cb543de0e63b9831f5316d6024ab365e1c60ba6a9a267d5620559d4769e58abe82ba936db16ba251aa857e70d166e5ad59a8e0040c5f78847a405685bdddd0666b",
	"__v": 0
},
{
	
	"username": "stoffe",
    "name": "Stoffe Rocker",
    "avatar": "images/avatar/stoffe.jpg",
    "event": "Your are a rock star",
	"salt": "bc20d1a252a181daa3acf582a73de4408c532b9bdb33a5161171ef989f637115",
	"hash": "f293ce7a1cba348ec76227138f08c577472b602a0ca8f7c3466144fc33e465689450f2f345ae540d939870d9bc1f508c9a00056fbc34fc6c1652cd7a7e4e93ad6bec3cc6aef638c17a4fc2858ea1cc43c70495e4f15670ca8176b844807b692d04f2cefc58cc2fd7f0eaef09a3bf8cb9433dfaa2781d1cc005f3bdf2f59e73f90ebd7d9e2e45c74b688b1f73d25a69fcc6d7dae701faf16000e7486a2f1d19f3bd65a9869d34be9f23328fc56b7515e1054b25378c842d00ad021f370d44a65ff6a786e963cf0307fcf281412fb9dc1afac2bc7f37f05eae6117a80c82fbec5501fda18c4e9ceb65dd8af14cdc0f3de8fb9eacad2eeb750e4148b992036132f62166a0b5752bc85c83bde7c508e99bc9c88afb40a0faef41d23d3dce3428f8dfcc933c892f6e64b058f2952f556b188b524b6665e974672852a0ee562c6230f1f8be05b1366b56ef4d39aa960b714488d9d77a39cbebebd7d045871d2cd7aff868c6dec2ac67b981e60d174e9894f25ccdf3d680c704d92c864fa2e85fd80930d8cf2d308f31f79165cdac29ae13f2c3522eb23405df0914080b9900e2ea136043fe00f7b9e07a8075677a6198c8056b8f964282f03ac337d23cbdf2f90d15a68e3ed9c921014906c2cedd2fb13e0a1e2f51c275abd78642351cda7bb39a9155d290c93f3357071c797a7e43bbcf66dbaccc14ea3fe19e35ec9f7c8029ba99ac",
	"__v": 0
},    
    
]

function userdataDB() {
    //Remove all Users
    User.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed Users!");

        //add a few Users
        data.forEach(function (seed) {
            User.create(seed, function (err, user) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("added a user");
                    //create a comment

                }
            });
        });
    });
}

module.exports = userdataDB;