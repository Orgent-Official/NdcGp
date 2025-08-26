var _3l=118; //AWM
var utw=1620;
var ndc=600;
var cwmm=926;
var chy=100;
var nacl=410; //ptc
var _5u=121;
var eug=370;

function makeop()
{
	var option = {
			title: {
				text: '市值走势图'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['AWM', 'Utw', 'Ndc','CWMM','Eug','Chy','PTC','5U']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '10%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['8.20', '8.21', '8.22', '8.23', '8.24', '8.25', '8.26', '当前']
			},
				yAxis: {
				type: 'value'
			},
			series: [
			{
				name: 'AWM',
				type: 'line',
				data: [21,56,64,78,92,96,108,_3l]
			},
			{
				name: 'Utw',
				type: 'line',
				data: [1954,1742,1756,1699,1600,1600,1640,utw]
			},
			{
				name: 'Ndc',
				type: 'line',
				data: [491,492,495,497,502,520,550,ndc]
			},
			{
				name: 'CWMM',
				type: 'line',
				data: [1021,1000,950,900,880,921,922,cwmm]
			},
			{
				name: 'Eug',
				type: 'line',
				data: [449,430,390,380,360,370,350,eug]
			},
			{
				name: 'Chy',
				type: 'line',
				data: [132,119,98,76,43,50,85,chy]
			},
			{
				name: 'PTC',
				type: 'line',
				data: [270,230,280,350,461,521,400,nacl]
			},
			{
				name: '5U',
				type: 'line',
				data: [117,116,117,118,116,110,120,_5u]
			}
		]
		};
	return option;
}















var l1=130,l2=1540,l3=499,l4=920,l5=370,l6=43,l7=165,l8=116;


function buychecknowprice(id)
{
	switch(Number(id))
	{
	case 0:
		return 0;
		break;
	case 1:
		return _3l;
		break;
	case 2:
		return utw;
		break;
	case 3:
		return ndc;
		break;
	case 4:
		return cwmm;
		break;
	case 5:
		return eug;
		break;
	case 6:
		return chy;
		break;
	case 7:
		return nacl;
		break;
	case 8:
		return _5u;
		break;
	}
}

function buycheckpastprice(id)
{
	return id;
}

function buycheckname(id)
{
	switch(Number(id))
	{
	case 0:
		return "无";
		break;
	case 1:
		return "AWM";
		break;
	case 2:
		return "Utw";
		break;
	case 3:
		return "Ndc";
		break;
	case 4:
		return "CWMM";
		break;
	case 5:
		return "Eug";
		break;
	case 6:
		return "Chy";
		break;
	case 7:
		return "PTC";
		break;
	case 8:
		return "5U";
		break;
	}

}




