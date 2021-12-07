// Browsing INFOs.js   //
// Aaron Clay //
// 12-07-2021 // 
// Editor: Notpadqq: v2.0.0-beta+git on Linux MINT //

var screen_X = 0;
var screen_Y = 0; 

var technical_outs = {
screen_width: 0,
screen_height: 0,
browser:"",
UA: "", 
get_screen_dims: function () {
	console.log("ScreenX: " + this.screen_width + "\n" + "ScreenY: " + this.screen_height);
},
get_nav: function () {
	console.log("Nav [obj]: " + this.UA + ""); 
}
	
};

function get_infos()
{
	screen_X = window.innerWidth;
	screen_Y = window.innerHeight; 
	technical_outs.browser = window.navigator.vendor;
	technical_outs.UA = window.navigator.userAgent;
	technical_outs.screen_width = screen_X;
	technical_outs.screen_height = screen_Y;
	var tgtX = document.getElementById('tgtX');
	tgtX.innerHTML = technical_outs.screen_width + "px";
	var tgtY = document.getElementById('tgtY');
	tgtY.innerHTML = technical_outs.screen_height + "px";
	
}

function change_color(color)
{
	var tgtX = document.getElementById('tgtX');
	var tgtY = document.getElementById('tgtY');
	var tgtG = document.getElementById('tgtDraw');
	
	
	switch (color)
	{
		case "dark":
			tgtX.style.color = "black";
			tgtY.style.color = "black";
			tgtG.style.boxShadow = "3px 3px 8px black";
			break;
		case "light":
			tgtX.style.color = "grey";
			tgtY.style.color = "grey";
			tgtG.style.boxShadow = "3px 3px 8px grey";
			break;
		case "blue":
			tgtX.style.color = "#285add";
			tgtY.style.color = "#285add";
			tgtG.style.boxShadow = "3px 3px 8px #285add";
			break;
		case "yellow":
			tgtX.style.color = "#f5ea31";
			tgtY.style.color = "#f5ea31";
			tgtG.style.boxShadow = "3px 3px 8px #f5ea31";
			break;
		default:
			tgtX.style.color = "black";
			tgtY.style.color = "black";
			tgtG.style.boxShadow = "0px 0px 0px black";
			break;
	}
}

function change_chart(type)
{
	// console.log(type); // DEBUG 
	
	switch(type)
	{
		case "Bar":
			var eCBO = document.getElementById('cboDS');
			eCBO.style.visibility = "visible";
			eCBO.innerHTML = "";
			var strHTML = "";
			strHTML += "<span id='selDS' class='selD'>Select DataSet: </span><br />";
			strHTML += "<input type='checkbox' value='DS1' value=false onclick=check_stateB(this.checked,this.id); id='chkDS1' class='chkDS1' />&nbsp;<span id='sp_chkDS1' class='sp_chkDS1'>DS1</span>";
			strHTML += "<input type='checkbox' value='DS2' value=false onclick=check_stateB(this.checked,this.id); id='chkDS2' class='chkDS2' />&nbsp;<span id='sp_chkDS2' class='sp_chkDS2'>DS2</span><br />";
			strHTML += "<input type='checkbox' value='DS3' value=false onclick=check_stateB(this.checked,this.id); id='chkDS3' class='chkDS3' />&nbsp;<span id='sp_chkDS3' class='sp_chkDS3'>DS3</span>";
			strHTML += "<input type='checkbox' value='DS4' value=false onclick=check_stateB(this.checked,this.id); id='chkDS4' class='chkDS4' />&nbsp;<span id='sp_chkDS4' class='sp_chkDS4'>DS4</span>";
			eCBO.innerHTML = strHTML;
			
			break;
		case "Line":
			var eCBO = document.getElementById('cboDS');
			eCBO.style.visibility = "visible";
			eCBO.innerHTML = "";
			var strHTML = "";
			strHTML += "<span id='selDS' class='selD'>Select DataSet: </span><br />";
			strHTML += "<input type='checkbox' value='DS1' value=false onclick=check_stateL(this.checked,this.id); id='chkDS1' class='chkDS1' />&nbsp;<span id='sp_chkDS1' class='sp_chkDS1'>DS1</span>";
			strHTML += "<input type='checkbox' value='DS2' value=false onclick=check_stateL(this.checked,this.id); id='chkDS2' class='chkDS2' />&nbsp;<span id='sp_chkDS2' class='sp_chkDS2'>DS2</span>";
			eCBO.innerHTML = strHTML;
			
			break;
		case "Pie":
			var eCBO = document.getElementById('cboDS');
			eCBO.style.visibility = "hidden";
			draw_pie();
			break;
			
		default:
			break;
	}
}

function draw_pie()
{
	var data = [PI_DS[0]];
	var layout = {
		height: 300,
		width: 500
		
	};
	
	Plotly.newPlot('tgtDraw', data,layout,{displayModeBar: false});
	
}

function check_stateB(state,id)
{
	ds1 = {};
	ds1 = BR_DS[0];
	var names1 = ds1.names;
	var values1 = ds1.values;
	
	ds2 = {};
	ds2 = BR_DS[1];
	var names2 = ds2.names;
	var values2 = ds2.values;
	
	ds3 = {};
	ds3 = BR_DS[2];
	var names3 = ds3.names;
	var values3 = ds3.values;
	
	ds4 = {};
	ds4 = BR_DS[3];
	var names4 = ds3.names;
	var values4 = ds3.values; 
	
	
	chk1 = document.getElementById('chkDS1');
	chk2 = document.getElementById('chkDS2');
	chk3 = document.getElementById('chkDS3');
	chk4 = document.getElementById('chkDS4');
	
	trace1 = {
		x: ds1.names,
		y: ds1.values,
		name: "Fruits",
		type: 'bar'
	};
	
	trace2 = {
		x: ds2.names,
		y: ds2.values,
		name: "Fruits2",
		type: 'bar'
	};
	
	trace3 = {
		x: ds3.names,
		y: ds3.values,
		name: "Technology",
		type: 'bar'
	};
	
	trace4 = {
		x: ds4.names,
		y: ds4.values,
		name: "Earth Life",
		type: 'bar'
	};
	
	// 1
	// 2
	// 3 
	// 4
	
	// 1,2
	// 1,3
	// 1,4
	
	// 2,3
	// 2,4
	
	// 3,4
	
	if (chk1.checked == true && chk2.checked == false && chk3.checked == false && chk4.checked == false) // 1
	{
		var data = [trace1];
		plot_bar(data);
	}
	
	if (chk2.checked == true && chk1.checked == false && chk3.checked == false && chk4.checked == false) // 2
	{
		var data = [trace2];
		plot_bar(data);
	}
	if (chk3.checked == true && chk1.checked == false && chk2.checked == false && chk4.checked == false) // 3
	{
		var data = [trace3];
		plot_bar(data);
	}
	if (chk4.checked == true && chk1.checked == false && chk3.checked == false && chk2.checked == false) // 4
	{
		var data=[trace4];
		plot_bar(data);
	}
	
	if (chk1.checked == true && chk2.checked == true && chk3.checked == false && chk4.checked == false) // 1,2
	{
		var data = [trace1,trace2];
		plot_bar(data);
	} 
	if (chk1.checked == true && chk3.checked == true && chk2.checked == false && chk4.checked == false) // 1,3
	{
		var data = [trace1,trace3];
		plot_bar(data);
	}
	if (chk1.checked == true && chk4.checked == true && chk3.checked == false && chk2.checked == false) // 1,4
	{
		var data=[trace1,trace4];
		plot_bar(data);
	}
	if (chk2.checked == true && chk3.checked == true && chk4.checked == false && chk1.checked == false) // 2,3
	{
		var data=[trace2,trace3];
		plot_bar(data);
	}
	if (chk2.checked == true && chk4.checked == true && chk1.checked == false && chk3.checked == false) // 2,4
	{
		var data = [trace2,trace4];
		plot_bar(data);
	}
	if (chk3.checked == true && chk4.checked == true && chk1.checked == false && chk2.checked == false) // 3,4
	{
		var data=[trace3,trace4];
		plot_bar(data);
	}
	
	if (chk1.checked == true && chk2.checked == true && chk3.checked == true && chk4.checked == false) // 1,2,3
	{
		var data =[trace1,trace2,trace3];
		plot_bar(data);
	}
	if (chk1.checked == true && chk2.checked == true && chk3.checked == true && chk4.checked == true) // 1,2,3,4
	{
		var data = [trace1,trace2,trace3,trace4];
		plot_bar(data);
	}
	
	if (chk1.checked == false && chk2.checked == false && chk3.checked == false & chk4.checked == false) // empty
	{
			var eCBO = document.getElementById('tgtDraw');
			eCBO.innerHTML = "";
	}
	if (chk1.checked == true && chk3.checked == true && chk4.checked == true && chk2.checked == false) // 1,3,4
	{
		var data = [trace1,trace2,trace3];
		plot_bar(data);
	}
	if (chk1.checked == true && chk2.checked == true && chk4.checked == true && chk3.checked == false) // 1,2,4
	{
		var data = [trace1,trace2,trace4];
		plot_bar(data);
	}
	if (chk3.checked == true && chk4.checked == true && chk2.checked == true && chk1.checked == false) // 3,4,2
	{
		var data =[trace3,trace4,trace2];
		plot_bar(data);
	}
	
}


function check_stateL(state,id)
{
		ds1 = {};
		ds1 = LN_DS[0]; // data set 1 
		var xPlots = ds1.x;
		var yPlots = ds1.y;
		ds2 = {};
		ds2 = LN_DS[1]; // data set 2
		var xPlots2 = ds2.x;
		var xPlots2 = ds2.y; 

		trace1 = {
			x: ds1.x,
			y: ds1.y,
			type: 'scatter'
		};
	
		trace2 = {
			x: ds2.x,
			y: ds2.y,
			type: 'scatter'
		};
		
		//ds1 only
		//ds2 only
		//ds1 && ds2
	
		chk1 = document.getElementById('chkDS1');
		chk2 = document.getElementById('chkDS2');
		
		
		if (chk1.checked == true && chk2.checked == false)
		{
			// just ds1
			var data = [trace1];
			plot_line(data);
		}
		if (chk2.checked == true && chk1.checked == false)
		{
			// just ds2
			var data = [trace2];
			plot_line(data);
		}
		if (chk1.checked == true && chk2.checked == true)
		{
			// both
			var data = [trace1,trace2];
			plot_line(data);
		}
		
		if(chk1.checked == false && chk2.checked == false)
		{
			elem = document.getElementById('tgtDraw');
			elem.innerHTML = "";
		}
			
}

function plot_line(data)
{
		layout = {};
		Plotly.newPlot('tgtDraw', data,layout,{displayModeBar: false});	
	
}
	
function plot_bar(data)
	{
		layout = {barmode: 'group'};
		Plotly.newPlot('tgtDraw', data,layout,{displayModeBar: false});
	}