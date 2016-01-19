/******************************************************************************************
Filename: script.js
Author: Sara Hashem
Date: 10/20/2015
Description: This is a script for building a table and directional buttons on a webpage.
******************************************************************************************/

// Create div to hold table and add to document
var tableSection = document.createElement("div");
document.body.appendChild(tableSection);

// Create table, table head, and table body elements
var table = document.createElement("table");
var tHead = document.createElement("thead");
var tBody = document.createElement("tbody");

// Add table head and body to table
table.appendChild(tHead);
table.appendChild(tBody);

// Add header row to table head
var headerRow = document.createElement("tr");
tHead.appendChild(headerRow);

// Add header cells to table head and populate
for(var i = 1; i < 5; i++){
	var headerCell = document.createElement("th");
	headerCell.textContent = "Header " + i;
	headerCell.style.border = "thin solid";
	headerRow.appendChild(headerCell);
}

// Add rows and cells to table body and populate
for(var i = 1; i < 4; i++){
	var row = document.createElement("tr");
	row.style.border = "thin solid";
	tBody.appendChild(row);

	for(var j = 1; j < 5; j++){
		var cell = document.createElement("td");
		cell.textContent = j + ", " + i;
		cell.style.border = "thin solid";
		row.appendChild(cell);
	}
}

// Initialize table with first cell selected
table.children[1].children[0].children[0].style.border = "thick solid";

// Add table to div
tableSection.appendChild(table);


// Create div to hold buttons and add to document
var buttonSection = document.createElement("div");
document.body.appendChild(buttonSection);

// Create button elements, populate, and add to div
var up = document.createElement("button");
up.textContent = "Up";
buttonSection.appendChild(up);

var down = document.createElement("button");
down.textContent = "Down";
buttonSection.appendChild(down);

var left = document.createElement("button");
left.textContent = "Left";
buttonSection.appendChild(left);

var right = document.createElement("button");
right.textContent = "Right";
buttonSection.appendChild(right);

var mark = document.createElement("button");
mark.textContent = "Mark Cell";
buttonSection.appendChild(mark);


// Click event implementation section
// Store array of table cells in variable
var cellList = document.getElementsByTagName("td");

// Up button implementation
up.addEventListener("click", function(event){
	for(var i = 0; i < cellList.length; i++){
		// If cells in top row are selected, disable button
		if(cellList[0].style.border == "thick solid"){
			event.preventDefault();
		}
		else if(cellList[1].style.border == "thick solid"){
			event.preventDefault();
		}
		else if(cellList[2].style.border == "thick solid"){
			event.preventDefault();
		}
		else if(cellList[3].style.border == "thick solid"){
			event.preventDefault();
		}
		else{
			// If the current cell is already selected, change border style accordingly
			if(cellList[i].style.border == "thick solid"){
				cellList[i-4].style.border = "thick solid";
				cellList[i].style.border = "thin solid";
			}
		}
	}
});

// Down button implementation
down.addEventListener("click", function(event){
	for(var i = (cellList.length)-1; i >= 0; i--){
		// If cells in bottom row are selected, disable button
		if(cellList[8].style.border == "thick solid"){
			event.preventDefault();
		}
		else if(cellList[9].style.border == "thick solid"){
			event.preventDefault();
		}
		else if(cellList[10].style.border == "thick solid"){
			event.preventDefault();
		}
		else if(cellList[11].style.border == "thick solid"){
			event.preventDefault();
		}
		else{
			// If the current cell is already selected, change border style accordingly
			if(cellList[i].style.border == "thick solid"){
				cellList[i+4].style.border = "thick solid";
				cellList[i].style.border = "thin solid";
			}
		}
	}
});

// Left button implementation
left.addEventListener("click", function(event){
	for(var i = 0; i < cellList.length; i++){
		// If cells in left column are selected, disable button
		if(cellList[0].style.border == "thick solid"){
			event.preventDefault();
		}
		else if(cellList[4].style.border == "thick solid"){
			event.preventDefault();
		}
		else if(cellList[8].style.border == "thick solid"){
			event.preventDefault();
		}
		else{
			// If the current cell is already selected, change border style accordingly
			if(cellList[i].style.border == "thick solid"){
				cellList[i-1].style.border = "thick solid";
				cellList[i].style.border = "thin solid";
			}
		}
	}
});

// Right button implementation
right.addEventListener("click", function(event){
	for(var i = (cellList.length)-1; i >= 0; i--){
		// If cells in right column are selected, disable button
		if(cellList[3].style.border == "thick solid"){
			event.preventDefault();
		}
		else if(cellList[7].style.border == "thick solid"){
			event.preventDefault();
		}
		else if(cellList[11].style.border == "thick solid"){
			event.preventDefault();
		}
		else{
			// If the current cell is already selected, change border style accordingly
			if(cellList[i].style.border == "thick solid"){
				cellList[i+1].style.border = "thick solid";
				cellList[i].style.border = "thin solid";
			}
		}
	}
});

// Mark button impementation
mark.addEventListener("click", function(event){
	// Set id for selected cell to marked
	for(var i = 0; i < cellList.length; i++){
		if(cellList[i].style.border == "thick solid"){
			cellList[i].id = "marked";
		}
	}
	
	// Change background color of marked cell
	var markedCell = document.getElementById("marked");
	markedCell.style.backgroundColor = "yellow";

	// Clear id attribute for marked cell to be able to apply to later cells
	markedCell.removeAttribute("id");
});