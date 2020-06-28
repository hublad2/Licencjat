import Chart from "chart.js";

let p0 = 101325;
let M = 0.0289654;
let T0 = 288.15;
let L = 0.0065;
let g = 9.80665;
let R = 8.314;

let rho0 = (p0 * M) / (R * T0);
let kek = "3";

function InitChart2() {
  Chart.pluginService.register({
    beforeInit: function (chart) {
      // We get the chart data
      var data = chart.config.data;

      // For every dataset ...
      for (var i = 0; i < data.datasets.length; i++) {
        // For every label ...
        for (var j = 0; j < data.labels.length; j++) {
          // We get the dataset's function and calculate the value
          var fct = data.datasets[i].function,
            x = data.labels[j],
            y = fct(x);
          // Then we add the value to the dataset data
          data.datasets[i].data.push(y);
        }
      }
    },
  });

  let ctx = document.getElementById("myChart");
  var data = {
    labels: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
    datasets: [
      {
        label: "Gęstość powietrza od wysokości n.p.m",
        function: function (h) {
          return rho0 * Math.exp(-((g * M * h) / (R * T0) - (L * h) / T0));
        },
        borderColor: "rgba(75, 192, 192, 1)",
        data: [],
        fill: false,
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  var myBarChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Gęstość powietrza (kg/m" + "\u00B3" + ")",
              fontSize: 13,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Wysokość nad poziomem morza (m)",
              fontSize: 13,
            },
          },
        ],
      },
    },
  });
}

export { InitChart2 };
