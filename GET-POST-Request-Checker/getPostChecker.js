/******************************************************************************************
Filename: getPostChecker.js
Author: Sara Hashem
Date: 11/12/2015
Description: Script file for GET and POST Checker application.
******************************************************************************************/

// Create Express request object
var express = require('express');

// Create Express application object
var app = express();

// Set up Handlebars and Body-Parser instances
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);


// Create route to display GET requests
app.get('/get-post-checker', function(req, res){
	// Create empty array to store key-value pairs in query string
	var queryString = [];
	// For each key-value pair, create an object and push to array
	for(var param in req.query){
		queryString.push({'key':param, 'value':req.query[param]})
	}
	// Create object to store request type and array
	var context = {};
	// If query string is not empty, render webpage with data
	if(queryString.length > 0){
		// Log query string to console for debugging
		console.log('Your GET request query parameters are:');
		console.log(queryString);
		console.log();
		console.log();
		// Set requestType to display 'GET'
		context.requestType = 'GET';
		// Set list to queryString
		context.list = queryString;
		res.render('get-post-checker', context);
	}
	// Otherwise, print no data message
	else if(queryString.length <= 0){
		// Set requestType to display 'No'
		context.requestType = 'No';
		// Log no data message to console
		console.log('No data has been entered.');
		// Print results
		res.render('get-post-checker', context);
	}
});


// Create route to display POST requests
app.post('/get-post-checker', function(req, res){
	// Create empty array to store key-value pairs in query string
	var queryString = [];
	// For each key-value pair, create an object and push to array
	for(var param in req.body){
		queryString.push({'key':param, 'value':req.body[param]})
	}
	// Create object to store request type and array
	var context = {};
	// If query string is not empty, render webpage with data
	if(queryString.length > 0){
		// Log query string to console for debugging
		console.log('Your POST request query parameters are:');
		console.log(queryString);
		console.log();
		console.log('Your POST request body is:');
		console.log(req.body);
		console.log();
		console.log();
		// Set requestType to display 'POST'
		context.requestType = 'POST';
		// Set list to queryString
		context.list = queryString;
		// Print results
		res.render('get-post-checker', context);
	}
	// Otherwise, print no data message
	else if(queryString.length <= 0){
		// Set requestType to display 'No'
		context.requestType = 'No';
		// Log no data message to console
		console.log('No data has been entered.');
		res.render('get-post-checker', context);
	}
});


// Create route to display 404 error message
app.use(function(req, res){
	res.status(404);
	res.render('404');
});


// Create route to display 500 error message
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});


// Log successful execution message and instructions to terminate to console
app.listen(app.get('port'), function(){
	console.log('Get-Post Checker successfully started on http://52.89.140.99:' + app.get('port') + '/get-post-checker');
	console.log('Press Ctrl-C to terminate.');
	console.log();
});