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

    // Select input and store in a variable
    var dateInput = d3.select('#datetime');
    var datetime = dateInput.property("value");

    // Filter datetimes that match the date input
    var filteredData = tableData.filter(sighting => sighting.datetime === datetime);
    
    // Clean out list
    tbody.html("");

    // Append elements to list and repopulate
    filteredData.forEach(function(sighting) {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
};

