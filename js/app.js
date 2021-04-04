// from data.js
var tableData = data;

// YOUR CODE HERE!

let selectButton = d3.select("#button"),
	selectForm = d3.select("#form");

const enterData = () => {
	d3.event.preventDefault();
	
	let inputDate = d3.select("#datetime"),
    dateValue = inputDate.property("value");
	
	let inputCity = d3.select("#city"),
    cityValue = inputCity.property("value");
	
	let inputRegion = d3.select("#region"),
    regionValue = inputRegion.property("value");
	
	let inputCountry = d3.select("#country"),
    countryValue = inputCountry.property("value");
	
	let inputShape = d3.select("#shape"),
    shapeValue = inputShape.property("value"),

	let filteredData = tableData.filter(events => events.datetime === dateValue);

	console.log(filteredData);

};

// Create event handlers
selectButton.on("click", enterData);
SelectForm.on("submit", enterData);
