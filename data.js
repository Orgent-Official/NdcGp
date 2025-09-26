var g3=600;
var _3l=94; //AWM
var utw=1750;
var ndc=1023;
var cwmm=979;
var chy=130;
var nacl=200; //uptc
var _5u=100;
var eug=0;
var ecc=120; // ECC  

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
				data: ['AWM', 'Utw', 'Vial','CWMM','Chy','5U','3L','ECC','UPTC (PTC)']
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
				data: [ '8.31', '9.1', '9.4', '9.13', '9.19', '9.26', '当前']
			},
				yAxis: {
				type: 'value'
			},
			series: [
			{
				name: 'AWM',
				type: 'line',
				data: [133,140,160,150,100,96,_3l]
			},
			{
				name: 'Utw',
				type: 'line',
				data: [1723,1790,1780,1781,1720,1730,utw]
			},
			{
				name: 'Vial',
				type: 'line',
				data: [200,430,460,500,900,990,ndc]
			},
			{
				name: 'UPTC (PTC)',
				type: 'line',
				data: [0,0,0,0,100,230,nacl]
			},
			{
				name: 'CWMM',
				type: 'line',
				data: [975,992,1000,1001,959,958,cwmm]
			},
			{
				name: 'Chy',
				type: 'line',
				data: [145,150,151,152,152,151,chy]
			},
			{
				name: '5U',
				type: 'line',
				data: [135,120,100,160,120,110,_5u]
			},
			{
				name: '3L',
				type: 'line',
				data: [620,660,700,690,599,610,g3]
			},
			{
				name: 'ECC',
				type: 'line',
				data: [98,93,96,96,98,110,ecc]
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
	case 9:
		return g3;
			break;
	case 10:
			return ecc;
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
		return "Vial";
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
	case 9:
		return "G3";
		break;
	case 10:
			return "ECC";
			break;
	}

}




















