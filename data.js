var _3l=21;
var utw=1600;
var ndc=502;
var cwmm=921;
var chy=50;
var nacl=45;
var _5u=110;
var eug=370;
var l1=130,l2=1540,l3=499,l4=43,l5=370,l6=43,l7=165,l8=116;


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
	switch(Number(id))
	{
	case 0:
		return 0;
		break;
	case 1:
		return l1;
		break;
	case 2:
		return l2;
		break;
	case 3:
		return l3;
		break;
	case 4:
		return l4;
		break;
	case 5:
		return l5;
		break;
	case 6:
		return l6;
		break;
	case 7:
		return l7;
		break;
	case 8:
		return l8;
		break;
	}
}

function buycheckname(id)
{
	switch(Number(id))
	{
	case 0:
		return "无";
		break;
	case 1:
		return "3L  (" + String(buychecknowprice(id)-buycheckpastprice(id)) + ") 编号：" + String(id);
		break;
	case 2:
		return "Utw  (" + String(buychecknowprice(id)-buycheckpastprice(id)) + ") 编号：" + String(id);
		break;
	case 3:
		return "Ndc  (" + String(buychecknowprice(id)-buycheckpastprice(id)) + ") 编号：" + String(id);
		break;
	case 4:
		return "CWMM  (" + String(buychecknowprice(id)-buycheckpastprice(id)) + ") 编号：" + String(id);
		break;
	case 5:
		return "Eug  (" + String(buychecknowprice(id)-buycheckpastprice(id)) + ") 编号：" + String(id);
		break;
	case 6:
		return "Chy  (" + String(buychecknowprice(id)-buycheckpastprice(id)) + ") 编号：" + String(id);
		break;
	case 7:
		return "氯化钠  (" + String(buychecknowprice(id)-buycheckpastprice(id)) + ") 编号：" + String(id);
		break;
	case 8:
		return "5U  (" + String(buychecknowprice(id)-buycheckpastprice(id)) + ") 编号：" + String(id);
		break;
	}
}