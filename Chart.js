// Get a reference to the option1 link in the sidebar
const option1Link = document.querySelector('.sidebar a[href="#Pie Chart"]');

// Add an event listener to the link to create the chart when it's clicked
option1Link.addEventListener('click', () => {
  // Create the chart using Chart.js
  const myChart = new Chart(chart, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
});

// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Define the data for the chart
var data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        label: 'My Dataset',
        data: [10, 20, 30],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ]
    }]
};

// Create the chart
var myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {}
});

