var path = require("path");
//get and use routes for FriendFinder app.

module.exports = function (app) {

	//get route for all friends 
	app.get("/api/friends", function(req, res) {
	  res.json(friends);

	});

	//post route goes here which would handle incoming surbey results.  
	//This route will also be used to handle the compatibility logic. 
}


