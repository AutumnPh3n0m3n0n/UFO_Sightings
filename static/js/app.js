// from data.js
var tableData = data;

// YOUR CODE HERE!

let button = d3.select("#filter-btn"),
	form = d3.select("#form");

//function to display the whole dataset
const enterData = () => {
	d3.event.preventDefault();
	
	//getting the input date
	let inputDate = d3.select("#datetime"),
    dateValue = inputDate.property("value");
	
	// let inputCity = d3.select("#city"),
    // cityValue = inputCity.property("value");
	
	// let inputRegion = d3.select("#region"),
    // regionValue = inputRegion.property("value");
	
	// let inputCountry = d3.select("#country"),
    // countryValue = inputCountry.property("value");
	
	// let inputShape = d3.select("#shape"),
    // shapeValue = inputShape.property("value");
	
	console.log(tableData);
	console.log(dateValue);

	//tableData is defined above
	let filterDates = tableData.filter(events => events.datetime === dateValue);

	console.log(filterDates);
	
	let dates = filterDates.map(events => events.datetime),
	cities = filterDates.map(events => events.city),
	regions = filterDates.map(events => events.state),
	countries = filterDates.map(events => events.country),
	figure = filterDates.map(events => events.shape),
	times = filterDates.map(events => events.durationMinutes),
	notes = filterDates.map(events => events.comments);

	
	  // Then, select the unordered list element by class name
	let listing = d3.select(".summary");
	listing.html("");
	
	const stats = {Date: dates, City: cities, Stage: regions, Country: countries, Shape: figure};
	Object.entries(stats).forEach(([stat, value]) => listing.append("li").text(`${stat}: ${value}`));
  
	  
};

// Create event handlers
button.on("click", enterData);
form.on("submit", enterData);
