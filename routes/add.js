var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log(data);
	res.render('add',data);
	console.log(req.query.name);
	console.log(req.query.description);
	var newFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/500/500/people/"
	};
	data["friends"].push(newFriend);
 };