// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on friends-data.

var friends	= require('../data/friends-data.js');
var path 	= require('path');

// ROUTING

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data from the freinds-data.js) 

	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In below case, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// When user fills out a survey request... this data is then sent to the server...
	// Then the server saves the data to the friendsMatchArray array in to friends-data.js file)
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function(req, res){
		console.log(req.body);
	});
}