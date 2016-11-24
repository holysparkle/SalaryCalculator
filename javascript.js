



var grossSalary=0;
var basicTax=0;
var tax40=0;
var tax45=0;
var netSalary=0;
var totalDeduction=0;
var blind= false;
var natInNumb=0;
var totalTax=0;
var chart;
var test = "stackedBar100";


var  runs = {grossSalary: grossSalary, tax: totalTax, nationalIns: natInNumb, netSalary: netSalary};
var executions = [2];

executions.push({grossSalary: grossSalary, tax: totalTax, nationalIns: natInNumb, netSalary: netSalary});
executions.push({grossSalary: grossSalary, tax: totalTax, nationalIns: natInNumb, netSalary: netSalary});

var changeCharts = document.getElementById("SwitchChart");
var userInput = document.getElementById("Submit");
userInput.addEventListener("click",calculations,false);
    
// Calculating all the needed information and writing on the webpage
function calculations(){  
    
    natInNumb=0;
    basicTax=0;
    tax40=0;
    netSalary=0;
    tax45=0;
    
    grossSalary = parseFloat(document.getElementById("enterSalary").value);
    document.getElementById("input1").innerHTML = grossSalary;

    document.getElementById("input3").innerHTML = tax40;
    document.getElementById("input5").innerHTML = tax45;
    document.getElementById("input2").innerHTML = basicTax;
    
    
    // Calculating Tax
    if (grossSalary <= 11000){
        basicTax = 0;
        document.getElementById("input2").innerHTML = basicTax;
    
    }
    
    else if (grossSalary >11000 && grossSalary <=43000) {
    basicTax = document.getElementById("input1").textContent;
    basicTax = Math.round((grossSalary - 11000) * 0.20);
    document.getElementById("input2").innerHTML = basicTax;

    }
        
    else if (grossSalary > 43000 && grossSalary<=150000)
        {
        basicTax = 32000 * 0.20;
        document.getElementById("input2").innerHTML = basicTax;
        tax40 = document.getElementById("input3").innerHTML = Math.round((grossSalary - 43000)* 0.40);

    }
    else {
         basicTax = 32000 * 0.20;
        document.getElementById("input2").innerHTML = basicTax;
        tax40 = document.getElementById("input3").innerHTML = Math.round((grossSalary - 43000)* 0.40);
        tax45 = document.getElementById("input5").innerHTML = Math.round((grossSalary - 150000)* 0.45);
    }
    
    // calculating total tax
    
    // Calculating NIN
    if(grossSalary <= 8060){        
        natInNumb = document.getElementById("nin").innerHTML= natInNumb;
    }
    
    else if(grossSalary>8060 && grossSalary<= 42380){
        
        natInNumb = document.getElementById("nin").innerHTML=Math.round((grossSalary - 8060) * 0.12);
    }
    else{

        natInNumb = document.getElementById("nin").innerHTML= Math.round((42380-8060) *0.12 + ((grossSalary- 42380) * 0.02));
    }
    // calculating the total deduction
    
    totalDeduction =document.getElementById("totDed").innerHTML = (basicTax + tax40 + tax45 + natInNumb);

    
    
    // calculating the net salary
    totalTax = document.getElementById("totalTax").innerHTML = (basicTax+ tax40 + tax45+ natInNumb);
    
    netSalary = document.getElementById("input4").innerHTML = (grossSalary - totalTax);
    
executions.shift();
executions.push({grossSalary: grossSalary, tax: totalTax, nationalIns: natInNumb, netSalary: netSalary});

}

// Calling the function so I can initialize the chart
myChartFunc();

 // switching between charts

// drawing the canvas with an onclick func
            document.getElementById("Submit").addEventListener("click", myChartFunc, "false");
            document.getElementById("Submit").addEventListener(onkeydown, enterKey(), "false" );
     //    document.getElementById("Submit").onclick = 
             
            function enterKey(){
                if (window.Event.keyCode == 13){
                    calculations();
                    myChartFunc();
                }
            }
             function myChartFunc() {
             
             CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#2F4F4F",
                "#008080",
                "#2E8B57",
                "#3CB371",
                "#90EE90"                
                ]);
             
			var chart = new CanvasJS.Chart("chartContainer",
			{
                type: test,
				theme: 'theme3',
                colorSet: "greenShades",
				title: { text: "Annual Salary Calculation"	},
				animationEnabled: true,
				axisY: {		title: "percent"				},
				legend: {					horizontalAlign: 'center',
                                            verticalAlign: 'bottom'},
				toolTip: {					shared: true				},
				data: [{
					type: "stackedBar100",
					showInLegend: true,
					name: "Your Annual Salary",
					indexLabel: "{y}",
					dataPoints: [
					{ y: executions[0].grossSalary, label: "The Last Saved Entry" },
					{ y: executions[1].grossSalary, label: "Previous Entry" },
					{ y: executions[2].grossSalary, label: "Current Entry" },

					]
				},

				{
					type: "stackedBar100",
					showInLegend: true,
					name: "Total Tax Deducted",
					indexLabel: "{y}",
					dataPoints: [
					{ y: executions[0].tax, label: "The Last Saved Entry" },
					{ y: executions[1].tax, label: "Previous Entry" },
                    { y: executions[2].tax, label: "Current Entry" },

					]
				},

				{
					type: "stackedBar100",
					showInLegend: true,
					name: "National Insurance Number Deductions",
					indexLabel: "{y}",
					dataPoints: [
					{ y: executions[0].nationalIns, label: "The Last Saved Entry" },
					{ y: executions[1].nationalIns, label: "Previous Entry" },
					{ y: executions[2].nationalIns, label: "Current Entry" },

					]
				},

				{
					type: "stackedBar100",
					showInLegend: true,
					name: "Net Salary",
					indexLabel: "{y}",
					dataPoints: [
					{ y: executions[0].netSalary, label: "The Last Saved Entry" },
					{ y: executions[1].netSalary, label: "Previous Entry" },
					{ y: executions[2].netSalary, label: "Current Entry" },] } 	]  });
            
                chart.render();
         };

    changeCharts = document.getElementById("SwitchChart").addEventListener("click", changingCharts, "false");
       function pieChart(){
	var chart2 = new CanvasJS.Chart("chartContainer",
	{
		theme: "theme2",
		title:{
			text: "Gaming Consoles Sold in 2012"
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: grossSalary, indexLabel: "Your Gross Salary" },
				{  y: totalTax, indexLabel: "Your Total Tax Deducted" },
				{  y: natInNumb, indexLabel: "National Insurance Number Contribution" },
				{  y: netSalary, indexLabel: "Your Net Salary"}
			]
		}
		]
	});
	chart2.render();
};


function changingCharts(){
    
    if (test == "pie"){
        myChartFunc();
        test = "stackedBar100";
        console.log(test);
    }
    
    else if (test == "stackedBar100"){
        pieChart();
        test= "pie";
    }
    else{}

}

console.log(test);