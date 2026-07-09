let barChart;
let pieChart;
let lineChart;

async function loadAlerts() {

    const response = await fetch("http://localhost:3000/alerts");
    const alerts = await response.json();

    document.getElementById("totalAlerts").innerText = alerts.length;

    let icmp = 0;
    let http = 0;

    const table = document.getElementById("alertTable");
    table.innerHTML = "";

    alerts.forEach(alert => {

        if(alert.type === "ICMP") icmp++;
        if(alert.type === "HTTP") http++;

        let color = "text-green-400";

        if(alert.severity === "Medium")
            color = "text-yellow-400";

        if(alert.severity === "High")
            color = "text-red-400";

        table.innerHTML += `

        <tr class="border-b border-slate-700 hover:bg-slate-700 duration-300">

            <td class="p-3">${alert.time}</td>

            <td class="p-3 font-bold">${alert.type}</td>

            <td class="p-3">${alert.message}</td>

            <td class="p-3">

                <span class="${color} font-bold">

                ${alert.severity}

                </span>

            </td>

        </tr>

        `;

    });

    document.getElementById("icmpCount").innerText = icmp;
    document.getElementById("httpCount").innerText = http;

    updateThreat(alerts);

    drawCharts(icmp,http);

}

function updateThreat(alerts){

    const badge = document.getElementById("threat");

    const high = alerts.filter(a=>a.severity==="High").length;

    const medium = alerts.filter(a=>a.severity==="Medium").length;

    if(high>0){

        badge.innerText="HIGH THREAT";
        badge.className="bg-red-600 px-4 py-2 rounded-lg font-bold animate-pulse";

    }

    else if(medium>0){

        badge.innerText="MEDIUM THREAT";
        badge.className="bg-yellow-500 px-4 py-2 rounded-lg font-bold";

    }

    else{

        badge.innerText="LOW THREAT";
        badge.className="bg-green-600 px-4 py-2 rounded-lg font-bold";

    }

}

function drawCharts(icmp,http){

    if(barChart)
        barChart.destroy();

    barChart=new Chart(document.getElementById("attackChart"),{

        type:"bar",

        data:{

            labels:["ICMP","HTTP"],

            datasets:[{

                label:"Detected Attacks",

                data:[icmp,http],

                backgroundColor:[
                    "#06b6d4",
                    "#f59e0b"
                ]

            }]

        },

        options:{

            responsive:true,

            plugins:{
                legend:{
                    labels:{
                        color:"white"
                    }
                }
            },

            scales:{

                x:{
                    ticks:{color:"white"}
                },

                y:{
                    beginAtZero:true,
                    ticks:{color:"white"}
                }

            }

        }

    });

    if(pieChart)
        pieChart.destroy();

    pieChart=new Chart(document.getElementById("pieChart"),{

        type:"doughnut",

        data:{

            labels:["ICMP","HTTP"],

            datasets:[{

                data:[icmp,http],

                backgroundColor:[
                    "#22c55e",
                    "#ef4444"
                ]

            }]

        }

    });

    if(lineChart)
        lineChart.destroy();

    lineChart=new Chart(document.getElementById("lineChart"),{

        type:"line",

        data:{

            labels:["1","2","3","4","5","6"],

            datasets:[{

                label:"Traffic",

                data:[

                    icmp+Math.random()*3,
                    http+Math.random()*2,
                    icmp+Math.random()*4,
                    http+Math.random()*5,
                    icmp+http,
                    icmp+http+Math.random()*3

                ],

                borderColor:"#06b6d4",

                fill:false,

                tension:.4

            }]

        },

        options:{

            plugins:{
                legend:{
                    labels:{
                        color:"white"
                    }
                }
            },

            scales:{

                x:{
                    ticks:{color:"white"}
                },

                y:{
                    ticks:{color:"white"}
                }

            }

        }

    });

}

loadAlerts();

setInterval(loadAlerts,5000);