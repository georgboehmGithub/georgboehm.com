async function dropDownEventHandler() {
    // Get a reference to the select element
    var selectMenu = document.getElementById('dropdown');
    var plotDiv = document.getElementById('myChart').getContext('2d');

    // Add an event listener for the 'change' event
    selectMenu.addEventListener('change', async function() {
    // Get the selected option value
    var runCategory = encodeURIComponent(selectMenu.value);
    const response = await fetch(`/sports/database?category=${runCategory}`);
    const data = await response.json();
    // Extract the date and time values from the RowDataPacket objects
    const dates = data.map(row => row.Date.toString().slice(0, 10));
    const times = data.map(row => row.Time);
    const locations = data.map(row => row.Location);
    console.log(locations)

    // Create the chart data
    const chartData = {
    labels: dates,
    locations: locations,
    datasets: [
        {
        label: runCategory,
        data: times,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointRadius: 5
        }
    ]
    };
    var myChart = new Chart(plotDiv, {
    type: 'line',
    data: chartData,
        options: {
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  // Get the label for the data point (time in HH:MM:SS format)
                  const label = data.datasets[tooltipItem.datasetIndex].label;
                  // Get the index of the data point in the data array
                  const index = tooltipItem.index;
                  // Get the location for the data point
                  const location = data.locations[index];
                  // Return the label and location in the format "Label: HH:MM:SS (Location)"
                  return `${location}`;
                }
              }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {
                          // Convert the value (in seconds) to a time string in the format "HH:MM:SS"
                          const hours = `0${Math.floor(value / 3600)}`.slice(-2);
                          const minutes = `0${Math.floor((value % 3600) / 60)}`.slice(-2);
                          const seconds = `0${value % 60}`.slice(-2);
                          return `${hours}:${minutes}:${seconds}`;
                        }
                      }
                }]
                }
          }       
    });
    });
}
