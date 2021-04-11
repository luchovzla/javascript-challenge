console.log("app.js loaded successfully!");

// from data.js
var tableData = data;

// Reference to table body
var table = d3.select("#ufo-table");
var tbody = table.append('tbody');

// Loop through 'data' and print out UFO sightings, appending a row for each element
data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

