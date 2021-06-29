$(document).ready(function () {
  //  chartist.js start

  /*
        ================================
                statistics_data
        ================================
    */

  var chart = new Chartist.Line(
    "#statistics_data",
    {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      series: [
        [12000, 25000, 16000, 30000, 18000, 40000],
        [8000, 23000, 11000, 25000, 15000, 35000],
        [22000, 40000, 28000, 50000, 30000, 10000],
        [16000, 2900, 10000, 35000, 22000, 8500],
        [24000, 50000, 32000, 60000, 36000, 80000],
      ],
    },
    {
      height: "190px",
      low: 0,
      showArea: true,
      showPoint: true,
      fullWidth: true,
      axisY: {
        labelInterpolationFnc: function (value) {
          return value / 1000 + "k";
        },
      },
      plugins: [
        Chartist.plugins.tooltip({
          currency: "$",
          class: "line-graph-tooltip",
          appendToBody: false,
        }),
      ],
    }
  );

  chart.on("draw", function (data) {
    if (data.type === "line" || data.type === "area") {
      data.element.animate({
        d: {
          begin: 1000 * data.index,
          dur: 2000,
          from: data.path
            .clone()
            .scale(1, 0)
            .translate(0, data.chartRect.height())
            .stringify(),
          to: data.path.clone().stringify(),
          easing: Chartist.Svg.Easing.easeOutQuint,
        },
      });
    }
  });

  /*
			================================
			 		yaerly_expence
			================================
		*/

  new Chartist.Bar(
    "#item_barchart",
    {
      labels: ["Item1", "Item2", "Item3"],
      series: [
        [30000, 22000, 32000],
        [25000, 35000, 20000],
        [15000, 20000, 18000],
        [15000, 20000, 18000],
        [15000, 20000, 18000],
      ],
    },
    {
      height: "190px",
      // Default mobile configuration
      stackBars: true,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value
            .split(/\s+/)
            .map(function (word) {
              return word[0];
            })
            .join("");
        },
      },
      axisY: {
        labelInterpolationFnc: function (value) {
          return value / 1000 + "k";
        },
      },

      plugins: [
        Chartist.plugins.tooltip({
          currency: "$",
          class: "line-graph-tooltip",
          appendToBody: false,
        }),
      ],
    },
    [
      // Options override for media > 400px
      ["screen and (min-width: 399px)", {}],
      // Options override for media > 800px
      [
        "screen and (min-width: 767px)",
        {
          stackBars: false,
          reverseData: true,
          horizontalBars: true,
          axisX: {
            labelInterpolationFnc: Chartist.noop,
          },
          axisY: {
            offset: 60,
          },

          // seriesBarDistance: 10
        },
      ],
      // Options override for media > 1000px
      [
        "screen and (min-width: 768px)",
        {
          reverseData: false,
          horizontalBars: false,
          seriesBarDistance: 15,
        },
      ],
    ]
  );

  //  chartist.js end
});
