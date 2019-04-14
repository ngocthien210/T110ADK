$(document).ready(function() {
    /*bar chart 1*/
    var canvas_barChart1 = document.getElementById("barChart1");
    var barChart1 = new Chart(canvas_barChart1, {
        type: 'bar',
        data: {
            labels: ["Red", "Cyan", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(222,106,115,1)',
                    'rgba(86,182,194,1)',
                    'rgba(203,203,65,1)',
                    'rgba(152,195,121,1)',
                    'rgba(198,120,221,1)',
                    'rgba(209,154,102,1)'
                ],
                borderColor: [
                    'rgba(222,106,115,1)',
                    'rgba(86,182,194,1)',
                    'rgba(203,203,65,1)',
                    'rgba(152,195,121,1)',
                    'rgba(198,120,221,1)',
                    'rgba(209,154,102,1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });


    /* pie char 1*/
    var canvas_pieChart1    = document.getElementById("pieChart1");;
    var pieChart1 = new Chart(canvas_pieChart1, {
        type: 'pie',
        options: {
            legend: {
                display: true,
                position: "left"
            }
        },
        data: {
            labels: [
                "A",
                "B",
                "C",
                "D"
            ],
            datasets: [
                {
                    data: [300, 50, 100, 80],
                    borderWidth: 0,
                    backgroundColor: [
                        'rgba(222,106,115,1)',
                        'rgba(86,182,194,1)',
                        'rgba(152,195,121,1)',
                        'rgba(209,154,102,1)'
                    ],
                }]
            }
    });


    /*pie chart home 1*/
    var canvas_pieChartHome1 = document.getElementById("pieChartHome1");
    var pieChartHome1 = new Chart(canvas_pieChartHome1, {
        type: 'doughnut',
        options: {
            cutoutPercentage: 90,
            legend: {
                display: false
            }
        },
        data: {
            labels: [
                "First",
                "Second",
                "Third",
                "Fourth"
            ],
            datasets: [
                {
                    data: [300, 50, 100, 60],
                    borderWidth: [0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(86,182,194,1)',
                        'rgba(86,182,194,0.75)',
                        'rgba(86,182,194,0.5)',
                        'rgba(86,182,194,0.25)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(86,182,194,1)',
                        'rgba(86,182,194,0.75)',
                        'rgba(86,182,194,0.5)',
                        'rgba(86,182,194,0.25)'
                    ]
                }]
        }
    });
    /*pie chart home 2*/
    var canvas_pieChartHome2 = $('#pieChartHome2');
    var pieChartHome3 = new Chart(canvas_pieChartHome2, {
        type: 'doughnut',
        options: {
            cutoutPercentage: 90,
            legend: {
                display: false
            }
        },
        data: {
            labels: [
                "First",
                "Second",
                "Third",
                "Fourth"
            ],
            datasets: [
                {
                    data: [120, 90, 77, 95],
                    borderWidth: [0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(222,106,115,1)',
                        'rgba(222,106,115,0.75)',
                        'rgba(222,106,115,0.5)',
                        'rgba(222,106,115,0.25)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(222,106,115,1)',
                        'rgba(222,106,115,0.75)',
                        'rgba(222,106,115,0.5)',
                        'rgba(222,106,115,0.25)'
                    ]
                }]
        }
    });

    /*pie chart home 3*/
    var canvas_pieChartHome3 = $('#pieChartHome3');
    var pieChartHome3 = new Chart(canvas_pieChartHome3, {
        type: 'doughnut',
        options: {
            cutoutPercentage: 90,
            legend: {
                display: false
            }
        },
        data: {
            labels: [
                "First",
                "Second",
                "Third",
                "Fourth"
            ],
            datasets: [
                {
                    data: [80, 70, 100, 60],
                    borderWidth: [0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(198,120,221,1)',
                        'rgba(198,120,221,0.75)',
                        'rgba(198,120,221,0.5)',
                        'rgba(198,120,221,0.25)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(198,120,221,1)',
                        'rgba(198,120,221,0.75)',
                        'rgba(198,120,221,0.5)',
                        'rgba(198,120,221,0.25)'
                    ]
                }]
        }
    });


    var legendState = true;
    if ($(window).outerWidth() < 576) {
        legendState = false;
    }
    /*line chart */
    var canvas_lineChart = $('#lineChart1');
    var myLineChart = new Chart(canvas_lineChart, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 60,
                        min: 10
                    },
                    display: true,
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: legendState
            }
        },
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            datasets: [
                {
                    label: "Page Visitors",
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: "transparent",
                    borderColor: 'rgba(152,195,121,1)',
                    pointBorderColor: 'rgba(152,195,121,1)',
                    pointHoverBackgroundColor: 'rgba(152,195,121,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 2,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [20, 27, 20, 35, 30, 40, 33, 25, 39],
                    spanGaps: false
                },
                {
                    label: "Page Views",
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: "transparent",
                    borderColor: "rgba(209,154,102,1)",
                    pointBorderColor: 'rgba(209,154,102,1)',
                    pointHoverBackgroundColor: "rgba(209,154,102,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 2,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [25, 17, 28, 25, 33, 27, 30, 33, 27],
                    spanGaps: false
                }
            ]
        }
    });
    /* bar chart 2 */
    var canvas_barChart2 = $('#barChart2');
    var barChartHome = new Chart(canvas_barChart2, {
        type: 'bar',
        options:
        {
            scales:
            {
                xAxes: [{
                    display: false,
                    barPercentage: 0.2
                }],
                yAxes: [{
                    display: false
                }],
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)'
                    ],
                    borderColor: [
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)',
                        'rgba(203,203,65,1)'
                    ],
                    borderWidth: 0.2,
                    data: [35, 55, 65, 85, 40, 30, 18, 35, 20, 70]
                }
            ]
        }
    });
});