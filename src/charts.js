import Chart from "chart.js";

function InitChart() {
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
    labels: [0, 500, 1000, 1500, 2000, 2500],
    datasets: [
      {
        label: "Natężenie pola grawitacyjnego Ziemi",
        function: function (x) {
          return 398455710 / Math.pow(x + 6370, 2);
        },
        borderColor: "rgba(75, 192, 192, 1)",
        data: [],
        fill: false,
      },
      {
        label: "Natężenie pola grawitacyjnego Wenus",
        function: function (x) {
          return 324370980 / Math.pow(x + 6052, 2);
        },
        borderColor: "rgba(150, 192, 20, 1)",
        data: [],
        fill: false,
      },
    ],
  };

  var myBarChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Natężenie pola grawitacyjnego (m/s^2)",
              fontSize: 13,
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Odległość od powierzchni planety (km)",
              fontSize: 13,
            },
          },
        ],
      },
    },
  });
}

export { InitChart };
