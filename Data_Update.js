document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'U'].includes(e.key)) {
        e.preventDefault();
        return false;
    }
});

var llemon=630,lemon=630,bzlemon=0;
var lvial=1120,vial=1120,bzvial=0;
var lutw=1760,utw=1760,bzutw=0;
var lcwmm=960,cwmm=960,bzcwmm=0;
var luptc=250,uptc=250,bzuptc=0;
var lfivu=50,fivu=50,bzfivu=0;
var lecc=140,ecc=140,bzecc=0;
var lawm=80,awm=80,bzawm=0;
var lchy=100,chy=100,bzchy=0;
var lymcm=105,ymcm=105,bzymcm=0;

var chart;
var updateInterval;

function init_dtbs()
{
	localStorage.llemon = llemon;
    localStorage.lemon = lemon;
    localStorage.bzlemon = bzlemon;
    localStorage.lvial = lvial;
    localStorage.vial = vial;
    localStorage.bzvial = bzvial;
    localStorage.lutw = lutw;
    localStorage.utw = utw;
    localStorage.bzutw = bzutw;
    localStorage.lcwmm = lcwmm;
    localStorage.cwmm = cwmm;
    localStorage.bzcwmm = bzcwmm;
    localStorage.luptc = luptc;
    localStorage.uptc = uptc;
    localStorage.bzuptc = bzuptc;
    localStorage.lfivu = lfivu;
    localStorage.fivu = fivu;
    localStorage.bzfivu = bzfivu;
    localStorage.lecc = lecc;
    localStorage.ecc = ecc;
    localStorage.bzecc = bzecc;
    localStorage.lawm = lawm;
    localStorage.awm = awm;
    localStorage.bzawm = bzawm;
    localStorage.lchy = lchy;
    localStorage.chy = chy;
    localStorage.bzchy = bzchy;
    localStorage.lymcm = lymcm;
    localStorage.ymcm = ymcm;
    localStorage.bzymcm = bzymcm;
}

function save_data()
{
	localStorage.llemon = Number(llemon);
    localStorage.lemon = Number(lemon);
    localStorage.bzlemon = Number(bzlemon);
    localStorage.lvial = Number(lvial);
    localStorage.vial = Number(vial);
    localStorage.bzvial = Number(bzvial);
    localStorage.lutw = Number(lutw);
    localStorage.utw = Number(utw);
    localStorage.bzutw = Number(bzutw);
    localStorage.lcwmm = Number(lcwmm);
    localStorage.cwmm = Number(cwmm);
    localStorage.bzcwmm = Number(bzcwmm);
    localStorage.luptc = Number(luptc);
    localStorage.uptc = Number(uptc);
    localStorage.bzuptc = Number(bzuptc);
    localStorage.lfivu = Number(lfivu);
    localStorage.fivu = Number(fivu);
    localStorage.bzfivu = Number(bzfivu);
    localStorage.lecc = Number(lecc);
    localStorage.ecc = Number(ecc);
    localStorage.bzecc = Number(bzecc);
    localStorage.lawm = Number(lawm);
    localStorage.awm = Number(awm);
    localStorage.bzawm = Number(bzawm);
    localStorage.lchy = Number(lchy);
    localStorage.chy = Number(chy);
    localStorage.bzchy = Number(bzchy);
    localStorage.lymcm = Number(lymcm);
    localStorage.ymcm = Number(ymcm);
    localStorage.bzymcm = Number(bzymcm);
}

function load_data()
{
	if (localStorage.getItem('llemon') === null)
	{
        init_dtbs();
    }
	llemon = Number(localStorage.llemon) || llemon;
    lemon = Number(localStorage.lemon) || lemon;
    bzlemon = Number(localStorage.bzlemon) || bzlemon;
    lvial = Number(localStorage.lvial) || lvial;
    vial = Number(localStorage.vial) || vial;
    bzvial = Number(localStorage.bzvial) || bzvial;
    lutw = Number(localStorage.lutw) || lutw;
    utw = Number(localStorage.utw) || utw;
    bzutw = Number(localStorage.bzutw) || bzutw;
    lcwmm = Number(localStorage.lcwmm) || lcwmm;
    cwmm = Number(localStorage.cwmm) || cwmm;
    bzcwmm = Number(localStorage.bzcwmm) || bzcwmm;
    luptc = Number(localStorage.luptc) || luptc;
    uptc = Number(localStorage.uptc) || uptc;
    bzuptc = Number(localStorage.bzuptc) || bzuptc;
    lfivu = Number(localStorage.lfivu) || lfivu;
    fivu = Number(localStorage.fivu) || fivu;
    bzfivu = Number(localStorage.bzfivu) || bzfivu;
    lecc = Number(localStorage.lecc) || lecc;
    ecc = Number(localStorage.ecc) || ecc;
    bzecc = Number(localStorage.bzecc) || bzecc;
    lawm = Number(localStorage.lawm) || lawm;
    awm = Number(localStorage.awm) || awm;
    bzawm = Number(localStorage.bzawm) || bzawm;
    lchy = Number(localStorage.lchy) || lchy;
    chy = Number(localStorage.chy) || chy;
    bzchy = Number(localStorage.bzchy) || bzchy;
    lymcm = Number(localStorage.lymcm) || lymcm;
    ymcm = Number(localStorage.ymcm) || ymcm;
    bzymcm = Number(localStorage.bzymcm) || bzymcm;
}

function update_all() {
    load_data();
    
    function getRandomChange() {
        return Math.floor(Math.random() * 5) + 0;
    }

    // 更新lemon
    llemon = lemon;
    if (bzlemon === 1) {
        const change = getRandomChange();
        lemon = Number(lemon) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(lemon) + (Math.random() > 0.5 ? change : -change);
        lemon = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新vial
    lvial = vial;
    if (bzvial === 1) {
        const change = getRandomChange();
        vial = Number(vial) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(vial) + (Math.random() > 0.5 ? change : -change);
        vial = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新utw
    lutw = utw;
    if (bzutw === 1) {
        const change = getRandomChange();
        utw = Number(utw) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(utw) + (Math.random() > 0.5 ? change : -change);
        utw = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新cwmm
    lcwmm = cwmm;
    if (bzcwmm === 1) {
        const change = getRandomChange();
        cwmm = Number(cwmm) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(cwmm) + (Math.random() > 0.5 ? change : -change);
        cwmm = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新uptc
    luptc = uptc;
    if (bzuptc === 1) {
        const change = getRandomChange();
        uptc = Number(uptc) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(uptc) + (Math.random() > 0.5 ? change : -change);
        uptc = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新fivu
    lfivu = fivu;
    if (bzfivu === 1) {
        const change = getRandomChange();
        fivu = Number(fivu) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(fivu) + (Math.random() > 0.5 ? change : -change);
        fivu = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新ecc
    lecc = ecc;
    if (bzecc === 1) {
        const change = getRandomChange();
        ecc = Number(ecc) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(ecc) + (Math.random() > 0.5 ? change : -change);
        ecc = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新awm
    lawm = awm;
    if (bzawm === 1) {
        const change = getRandomChange();
        awm = Number(awm) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(awm) + (Math.random() > 0.5 ? change : -change);
        awm = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新chy
    lchy = chy;
    if (bzchy === 1) {
        const change = getRandomChange();
        chy = Number(chy) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(chy) + (Math.random() > 0.5 ? change : -change);
        chy = Math.max(0, tempValue); // 确保不小于0
    }
	lymcm=ymcm=bzymcm=0;
    save_data();
    updateChart();
    
}

function buychecknowprice(id)
{
	load_data();
	switch(Number(id))
	{
	case 0:
		return 0;
		break;
	case 1:
		return awm;
		break;
	case 2:
		return utw;
		break;
	case 3:
		return vial;
		break;
	case 4:
		return cwmm;
		break;
	case 5:
		return ymcm;
		break;
	case 6:
		return chy;
		break;
	case 7:
		return uptc;
		break;
	case 8:
		return fivu;
		break;
	case 9:
		return lemon;
		break;
	case 10:
		return ecc;
		break;
	}
}

function buycheckpastprice(id)
{
	load_data();
	switch(Number(id))
	{
	case 0:
		return 0;
		break;
	case 1:
		return lawm;
		break;
	case 2:
		return lutw;
		break;
	case 3:
		return lvial;
		break;
	case 4:
		return lcwmm;
		break;
	case 5:
		return lymcm;
		break;
	case 6:
		return lchy;
		break;
	case 7:
		return luptc;
		break;
	case 8:
		return lfivu;
		break;
	case 9:
		return llemon;
		break;
	case 10:
		return lecc;
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
		return "YMCM";
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
		return "Lemon实验室";
		break;
	case 10:
		return "ECC";
		break;
	}

}

function makeop()
{
	load_data();
	option = {
        title: {
                text: '当前市值'
            },
  		xAxis: {
    		type: 'category',
    		data: ['AWM', 'Utw', 'Vial', 'CWMM', 'Chy', 'PTC', '5U', 'Lemon', 'ECC'],
    		axisLabel: {
      			interval: 0,
      			rotate: 0, 
      			margin: 20,
      			fontSize: 10,
      			formatter: function(value) {
        			if (value.length > 15) {
          				return value.substring(0, 15) + '...'; 
        			}
        			return value;
      			}
   	 		}
  		},
  		yAxis: {
    		type: 'value'
  		},
  		series: [
    		{
      			data: [awm,utw,vial,cwmm,chy,uptc,fivu,lemon,ecc],
      			type: 'bar',
      			showBackground: true,
      			label: {
        			show: true,
        			position: 'top',
        			distance: 15, 
        			verticalAlign: 'middle',
        			textStyle: {
          				color: '#424656',
          				fontSize: 10
        			},
        			formatter: function(params)
        			{
          
          				let num = buychecknowprice(params.dataIndex+1) / buycheckpastprice(params.dataIndex+1);
          				num = Math.round(num * 100) / 100;
          				var zf='+';
          				if(buychecknowprice(params.dataIndex+1)<buycheckpastprice(params.dataIndex+1)) zf='-';
          				return (
            				buychecknowprice(params.dataIndex+1) + '(' + zf + num + '%' + ')'
          				);
        			}
      			}
    		}
  		]
	};
	return option;
}

        function startRealTimeUpdate() {
            if (!updateInterval) {
                updateInterval = setInterval(update_all, 1000);
            }
        }

        function stopRealTimeUpdate() {
            if (updateInterval) {
                clearInterval(updateInterval);
                updateInterval = null;
                alert('已停止实时更新。执行 startRealTimeUpdate 来重新开始更新。');
            }
        }

function mygpp()
{
	var option = {
            title: {
                text: '我购买的股票'
            },
                xAxis: {
                    interval: 0,
                    data: [buycheckname(localStorage.sel1),buycheckname(localStorage.sel2),buycheckname(localStorage.sel3)],
                    axisLabel: {
      interval: 0,
      rotate: 0, 
      margin: 20,
      fontSize: 12,
      formatter: function(value) {
        if (value.length > 15) {
          return value.substring(0, 15) + '...'; 
        }
        return value;
      }
    }
                },
                yAxis: {},
                series: [
                    {
                        type: 'bar',
                        data: [localStorage.buy1,localStorage.buy2,localStorage.buy3]
                    },
                    {
                        type: 'bar',
                        data: [(buychecknowprice(localStorage.sel1)/localStorage.p1*1.000*localStorage.buy1),(buychecknowprice(localStorage.sel2)/localStorage.p2*1.000*localStorage.buy2),(buychecknowprice(localStorage.sel3)/localStorage.p3*1.000*localStorage.buy3)]
                    }
                ]  
        };
    return option;
}

function btsheet()
{
    var option = {
            title: {
                text: '市场份额'
            },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '8%',
            left: 'center'
        },
        series: [
            {
            name: '市场份额',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: utw, name: 'Utw' },
                { value: vial, name: 'Vial' },
                { value: cwmm, name: 'CWMM' },
                { value: fivu, name: '5U' },
                { value: chy, name: 'Chy' },
                { value: ecc, name: 'ECC' },
                { value: lemon, name: 'Lemon' }
            ]
            }
        ]
    };
    return option;
}

