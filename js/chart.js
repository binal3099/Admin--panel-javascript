var options = {
    series: [{
    name: 'Orders',
    type: 'area',
    data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
  }, {
    name: 'Earnings',
    type: 'column',
    data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57]
  }, {
    name: 'Refunds',
    type: 'line',
    data: [8,12,7,17,21,11,5,9,7,29,12,35]
  }],
    chart: {
    height: 280,
    type: 'line',
    stacked:false,
  },
  grid :{
    show: false
  },
  stroke: {
     width: [0,0,3],
      dashArray:5
  },
  colors:['#eaeef4', '#5599ff', '#8561f9'],
  plotOptions: {
    bar: {
      columnWidth: '20%',
      borderRadius: 5
    }
  },
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  markers: {
    size: 0,
    colors: ['#8561f9']
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + "points";
        }
        return y;
  
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  var options = {
    series: [44, 55, 67, 83],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249
          }
        }
      }
    }
  },
  labels: ['Fashion', 'Electronics', 'Groceries', 'other'],
  };

  var chart = new ApexCharts(document.querySelector("#addchart"), options);
  chart.render();
