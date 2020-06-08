// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var dateform = d3.select("#datetime");

function populate() {
    date = dateform.property("value");
    d3.select("tbody").html("");
    tableData.forEach(entry => {
        if (date === "" || date === entry.datetime) {        // either when first loading page or when a date has been submitted
        var row = d3.select("tbody").append("tr");
        row.append("td").text(entry.datetime);
        row.append("td").attr("class","capitalize" ).text(entry.city); // added CSS to capitalize city names    
        row.append("td").text(entry.state.toUpperCase());    // state abbr and "US" should be all caps
        row.append("td").text(entry.country.toUpperCase());    
        row.append("td").text(entry.shape); 
        row.append("td").text(entry.durationMinutes);
        row.append("td").text(entry.comments);
        }});   
}

populate();
button.on("click", populate);
dateform.on("change", populate);