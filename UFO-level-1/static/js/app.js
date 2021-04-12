console.log("app.js loaded successfully!");



// from data.js
var tableData = data;

// Reference to table and table body
var table = d3.select("#ufo-table");
var tbody = table.append('tbody');

// Loop through 'data' and print out UFO sightings, appending a row for each element
tableData.forEach(function(sighting) {
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

// Variables to select button and form
var datetimeForm = d3.select('form');
var filterButton = d3.select('#filter-btn');

// Create event handlers
filterButton.on('click', runEnter);
datetimeForm.on('submit', runEnter);

// Event handler function

function runEnter() {

    // Prevent page from refreshing
    d3.event.preventDefault();

    var dateInput = d3.select('#datetime');

    // Select the input
    var datetime = dateInput.property("value");
    console.log(datetime);
};
