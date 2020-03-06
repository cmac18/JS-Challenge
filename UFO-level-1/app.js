//set variable to work with UFO-data file
var tbody = data;
//console.log(tbody);

//Set up a function to append the table to disply a date selected
function appendTable(data) {
    d3.select("tbody").html("");
    data.forEach((selection) => {
        var tableRow = d3.select("tbody").append("tr");
        Object.values(selection).forEach((value) => {
            var tbody = tableRow.append("td");
            tbody.text(value);
        });
    })
}

appendTable(tbody);

//Set up function to handle the event of clicking the filter button
//Set up variables to hold a date and filtered date
function clickEvent() {
    var date = d3.select("#datetime").property("value");
    var filterDateTime = tbody;
    if (date) {
      filterDateTime = filterDateTime.filter((row) => row.datetime === date);
    }
    appendTable(filterDateTime);
}

d3.selectAll("#filter").on("click", clickEvent);
  

