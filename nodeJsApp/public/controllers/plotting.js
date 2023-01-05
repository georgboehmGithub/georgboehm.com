
function runningPlot(data) {
    console.log("DATA IN PLOTTING JS:", data)

    var selectMenu = document.getElementById('dropdown');
    var plotDiv = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(plotDiv, {
        type: 'line',
        data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
        },
    })
}

module.exports = runningPlot