/******************************************************************************************
Filename: weatherScript.js
Author: Sara Hashem
Date: 11/7/2015
Description: Script file for weather application webpage. This program sends GET requests
for ZIP codes or city names asynchronously and prints the current weather conditions.
******************************************************************************************/

// My personal API key for Open Weather Map
var myAPIKey = 'd1a3ad1688e179d727362194f22fadb6';

// Create load event listener and bind to submit button
document.addEventListener('DOMContentLoaded', bindButton);

// Submit button binding function
function bindButton(){
	// Create click event listener for submit button
	document.getElementById('submitButton').addEventListener('click', function(event){
		// Create new request
	 	var req = new XMLHttpRequest();
	 	// Store user input in variable
	  	var sentData = document.getElementById('userInput').value;
	  	// Determine if user input is a ZIP code or a city name
	  	if(isNaN(userInput)){
	  		// Open asynchronous GET request passing ZIP code URL with concatenated user input
	  		req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + sentData + '&units=imperial&appid=' + myAPIKey, true);
	  	}
	  	else{
	  		// Open asynchronous GET request passing city name URL with concatenated user input
	  		req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=' + sentData + '&units=imperial&appid=' + myAPIKey, true);
	  	}
	    req.addEventListener('load', function(){
	    	// If load is successful, print formatted results
	    	if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				document.getElementById('name').textContent = response.name;
				document.getElementById('conditions').textContent = response.weather[0].main;
			  	document.getElementById('temp').textContent = response.main.temp + ' F';
				document.getElementById('humidity').textContent = response.main.humidity;
				document.getElementById('wind').textContent = response.wind.speed + ' units';
	    	}
	    	// Otherwise, log error message to the console
	    	else{
        		console.log("Error: " + request.statusText);
	    	}
	    });
	  	// Send request with user input string
	  	req.send(JSON.stringify(sentData));
	  	// Wait for user to submit form
	  	event.preventDefault();
	})
}