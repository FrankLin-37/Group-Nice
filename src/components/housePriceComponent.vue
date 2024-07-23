<script>
export default{
    data(){
        return{

            years:['2013', '2014', '2015', '2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030'],
            cityPrice:{"PreOwned":{
                                "taipei": [16200000, 16680000, 16800000, 16000000, 16600000, 17170000, 18200000, 18900000, 19200000, 18800000, 18880000, 19574363, 19906000, 20237636, 20569272, 20900909, 21232545,21564181],
                                "newtaipei": [9800000, 10350000, 10120000, 10000000, 10160000, 10580000, 11050000, 11400000, 11900000, 11800000, 12080000,12270727, 12509181, 12747636, 12986090, 13224545, 13463000,13701454],
                                "taoyuan": [6420000, 6660000, 6770000, 7200000, 7100000, 7450000, 7600000, 8300000, 8980000, 9120000, 9750000,9712909, 10038545, 10364181, 10689818, 11015454, 11341090,11666727],
                                "hsinchu": [7440000, 8020000, 8280000, 8800000, 9300000, 9480000, 9050000, 10080000, 9360000, 9580000, 11450000,10904000, 11193454, 11482909, 11772363, 12061818, 12351272,12640727],
                                "taichung": [6600000, 7200000, 7380000, 7650000, 8000000, 7950000, 8350000, 9020000, 9860000, 9900000, 10200000,10518909, 10876454, 11234000, 11591545, 11949090, 12306636,12664181],
                                "tainan": [5000000, 5300000, 5650000, 5910000, 6200000, 6280000, 6600000, 7300000, 7600000, 8200000, 8600000,8710727,  9061909,  9413090,  9764272, 10115454, 10466636,
                                10817818],
                                "kaohsiung": [5200000, 5590000, 5600000, 6060000, 6150000, 6200000, 6540000, 7020000, 7730000, 7700000, 8680000,8472181,  8786181,  9100181,  9414181,  9728181, 10042181,
                                10356181]}
                            },
                
                cityEngToCh:{
                    "taipei":"台北市",
                    "newtaipei":"新北市", 
                    "taoyuan":"桃園市", 
                    "hsinchu":"新竹市", 
                    "taichung":"台中市", 
                    "tainan":"台南市", 
                    "kaohsiung":"高雄市"      
                },

                // borderColor:[
                //     'rgba(249, 65, 68,1)',
                //     'rgba(243, 114, 44,1)',
                //     'rgba(248, 150, 30,1)',
                //     'rgba(249, 199, 79,1)',
                //     'rgba(144, 190, 109,1)',
                //     'rgba(67, 170, 139,1)',
                //     'rgba(87, 117, 144,1)',
                // ],
                // backgroundColor:[
                //     'rgba(249, 65, 68,0.2)',
                //     'rgba(243, 114, 44,0.2)',
                //     'rgba(248, 150, 30,0.2)',
                //     'rgba(249, 199, 79,0.2)',
                //     'rgba(144, 190, 109,0.2)',
                //     'rgba(67, 170, 139,0.2)',
                //     'rgba(87, 117, 144,0.2)',
                // ],
                borderColor:[
                    'rgba(249, 65, 68,1)',
                    'rgba(154, 3, 30,1)',
                    'rgba(236, 8, 104,1)',
                    'rgba(227, 100, 20,1)',
                    'rgba(15, 76, 92,1)',
                    'rgba(95, 15, 64,1)',                    
                    'rgba(42, 157, 143,1)',
                ],
                backgroundColor:[
                    'rgba(249, 65, 68,0.2)',
                    'rgba(154, 3, 30,0.2)',
                    'rgba(236, 8, 104,0.2)',
                    'rgba(227, 100, 20,0.2)',
                    'rgba(15, 76, 92,0.2)',
                    'rgba(95, 15, 64,0.2)',
                    'rgba(42, 157, 143,0.2)',
                ],
                selectedCity:'',
                selectedDistrict:'',
                // price:this.getDistrictPrice(),
                cities: ['台北', '新北', '桃園', '新竹', '台中', '台南', '高雄'],
                cityDetail:{            
                    "台北":{
                        "district_prices": {
                        "信義區": [21800000, 823],
                        "大安區": [32000000, 1173],
                        "內湖區": [20600000, 1194],
                        "北投區": [17300000, 976],
                        "士林區": [20500000, 875],
                        "中山區": [18950000, 1277],
                        "松山區": [25600000, 739],
                        "中正區": [24680000, 520],
                        "文山區": [17000000, 1033],
                        "萬華區": [12800000, 784],
                        "大同區": [18400000, 489],
                        "南港區": [22800000, 444]
                        },
                        "building_types": {
                        "公寓(5樓含以下無電梯)": 16920000,
                        "住宅大樓(11層含以上有電梯)": 26580000,
                        "華廈(10層含以下有電梯)": 22500000,
                        "透天厝": 28050000
                        },
                        "house_age": {
                        "10年屋": 30300000,
                        "20年屋": 24800000,
                        "30年屋": 25280000,
                        "40年屋": 20500000
                        }
                    },
                    "新北":{
                        "district_prices": {
                        "汐止區": [12400000, 1749],
                        "泰山區": [13200000, 382],
                        "淡水區": [9538000, 3205],
                        "新店區": [14600000, 1986],
                        "金山區": [6200000, 88],
                        "三芝區": [3200000, 231],
                        "中和區": [13700000, 2080],
                        "新莊區": [14280000, 2110],
                        "八里區": [10270000, 514],
                        "蘆洲區": [14000000, 862],
                        "三峽區": [13200000, 787],
                        "土城區": [13600000, 1221],
                        "板橋區": [15000000, 2602],
                        "三重區": [14280000, 2027],
                        "瑞芳區": [3200000, 106],
                        "鶯歌區": [10850000, 456],
                        "石門區": [1250000, 17],
                        "樹林區": [12200000, 697],
                        "五股區": [13200000, 907],
                        "萬里區": [2410000, 179],
                        "林口區": [17000000, 1195],
                        "深坑區": [9250000, 118],
                        "永和區": [15300000, 900],
                        "貢寮區": [2500000, 13],
                        "雙溪區": [3500000, 4],
                        "烏來區": [3200000, 2],
                        "坪林區": [12500000, 2]
                        },
                        "building_types": {
                        "華廈(10層含以下有電梯)": 13500000,
                        "住宅大樓(11層含以上有電梯)": 15000000,
                        "透天厝": 17500000,
                        "公寓(5樓含以下無電梯)": 10050000
                        },
                        "house_age": {
                        "10年屋": 15800000,
                        "20年屋": 17660000,
                        "30年屋": 14040000,
                        "40年屋": 11140000
                        }
                    },
                    "桃園":{
                        "district_prices": {
                        "觀音區": [7300000, 689],
                        "桃園區": [11800000, 3665],
                        "新屋區": [11800000, 294],
                        "中壢區": [10450000, 3519],
                        "龍潭區": [7600000, 720],
                        "大溪區": [7060000, 438],
                        "八德區": [10900000, 1200],
                        "龜山區": [12500000, 1537],
                        "楊梅區": [7700000, 1422],
                        "平鎮區": [8800000, 1292],
                        "蘆竹區": [12250000, 1044],
                        "大園區": [13060000, 750],
                        "復興區": [4900000, 2]
                        },
                        "building_types": {
                        "透天厝": 12500000,
                        "華廈(10層含以下有電梯)": 7500000,
                        "公寓(5樓含以下無電梯)": 5000000,
                        "住宅大樓(11層含以上有電梯)": 12300000
                        },
                        "house_age": {
                        "10年屋": 13600000,
                        "20年屋": 13000000,
                        "30年屋": 9820000,
                        "40年屋": 7200000
                        }
                    },
                    "新竹":{
                        "district_prices": {
                        "新竹市": [12650000, 2777]
                        },
                        "building_types": {
                        "公寓(5樓含以下無電梯)": 6400000,
                        "華廈(10層含以下有電梯)": 9400000,
                        "住宅大樓(11層含以上有電梯)": 16000000,
                        "透天厝": 17000000
                        },
                        "house_age": {
                        "10年屋": 16600000,
                        "20年屋": 18800000,
                        "30年屋": 12500000,
                        "40年屋": 8900000
                        }
                    },
                    "台中":{
                        "district_prices": {
                            "東勢區": [7730000, 128],
                            "西屯區": [11400000, 2508],
                            "梧棲區": [8060000, 463],
                            "西區": [10100000, 991],
                            "潭子區": [10000000, 458],
                            "北區": [7500000, 1634],
                            "沙鹿區": [11780000, 636],
                            "南區": [9500000, 1138],
                            "清水區": [9100000, 372],
                            "烏日區": [13500000, 504],
                            "新社區": [7000000, 46],
                            "霧峰區": [8880000, 205],
                            "太平區": [12000000, 1293],
                            "龍井區": [8860000, 337],
                            "神岡區": [11800000, 141],
                            "大肚區": [10580000, 204],
                            "大雅區": [12000000, 338],
                            "大甲區": [9200000, 183],
                            "中區": [2500000, 241],
                            "南屯區": [14500000, 1541],
                            "北屯區": [12900000, 2896],
                            "大安區": [6650000, 16],
                            "東區": [12800000, 550],
                            "后里區": [9380000, 123],
                            "豐原區": [9500000, 526],
                            "大里區": [10000000, 813],
                            "石岡區": [13500000, 15],
                            "外埔區": [8680000, 103]
                        },
                        "building_types": {
                            "透天厝": 15600000,
                            "住宅大樓(11層含以上有電梯)": 12000000,
                            "華廈(10層含以下有電梯)": 7800000,
                            "公寓(5樓含以下無電梯)": 5680000
                        },
                        "house_age": {
                            "10年屋": 14300000,
                            "20年屋": 15000000,
                            "30年屋": 12200000,
                            "40年屋": 7900000
                        }
                    },
                    "台南":{
                        "district_prices": {
                        "中西區": [7000000, 464],
                        "新營區": [7630000, 399],
                        "安定區": [8680000, 134],
                        "東區": [9000000, 1076],
                        "佳里區": [8450000, 260],
                        "仁德區": [9680000, 359],
                        "永康區": [8900000, 1458],
                        "新市區": [8800000, 270],
                        "北區": [9400000, 729],
                        "歸仁區": [9530000, 318],
                        "南區": [8000000, 589],
                        "安南區": [13300000, 1099],
                        "左鎮區": [4600000, 2],
                        "東山區": [6200000, 32],
                        "麻豆區": [8300000, 150],
                        "善化區": [11500000, 331],
                        "後壁區": [5000000, 38],
                        "關廟區": [9900000, 104],
                        "鹽水區": [3800000, 64],
                        "官田區": [10500000, 67],
                        "白河區": [7000000, 59],
                        "柳營區": [8800000, 42],
                        "六甲區": [7800000, 53],
                        "將軍區": [7535110, 19],
                        "楠西區": [3900000, 8],
                        "安平區": [9300000, 634],
                        "下營區": [10820000, 29],
                        "新化區": [8400000, 105],
                        "山上區": [8000000, 11],
                        "西港區": [10200000, 105],
                        "學甲區": [3460000, 138],
                        "玉井區": [3750000, 27],
                        "七股區": [7200000, 40],
                        "南化區": [2700000, 4],
                        "大內區": [12380000, 18],
                        "北門區": [2200000, 2]
                        },
                        "building_types": {
                        "華廈(10層含以下有電梯)": 6950000,
                        "公寓(5樓含以下無電梯)": 4200000,
                        "透天厝": 13000000,
                        "住宅大樓(11層含以上有電梯)": 9350000
                        },
                        "house_age": {
                        "10年屋": 12620000,
                        "20年屋": 14210000,
                        "30年屋": 9000000,
                        "40年屋": 6500000
                        }
                    },
                    "高雄":{
                        "district_prices": {
                        "楠梓區": [10000000, 2775],
                        "鳥松區": [12600000, 244],
                        "仁武區": [13500000, 1096],
                        "大樹區": [7000000, 171],
                        "三民區": [9200000, 2450],
                        "苓雅區": [9800000, 1696],
                        "大寮區": [7150000, 661],
                        "橋頭區": [12000000, 780],
                        "鹽埕區": [4900000, 169],
                        "前金區": [7700000, 371],
                        "左營區": [11400000, 2178],
                        "前鎮區": [9000000, 1247],
                        "小港區": [10000000, 1014],
                        "燕巢區": [9630000, 136],
                        "阿蓮區": [8500000, 48],
                        "新興區": [6500000, 412],
                        "鳳山區": [9380000, 2279],
                        "永安區": [7200000, 20],
                        "鼓山區": [13000000, 1390],
                        "林園區": [6680000, 374],
                        "旗山區": [4800000, 101],
                        "甲仙區": [2600000, 10],
                        "湖內區": [6850000, 164],
                        "路竹區": [9500000, 95],
                        "梓官區": [13600000, 142],
                        "岡山區": [9000000, 431],
                        "六龜區": [2800000, 9],
                        "美濃區": [6700000, 74],
                        "大社區": [7300000, 208],
                        "旗津區": [4200000, 16],
                        "茄萣區": [5830000, 35],
                        "彌陀區": [14500000, 18],
                        "內門區": [4500000, 3],
                        "杉林區": [2000000, 5]
                        },
                        "building_types": {
                        "公寓(5樓含以下無電梯)": 4200000,
                        "透天厝": 13680000,
                        "華廈(10層含以下有電梯)": 6700000,
                        "住宅大樓(11層含以上有電梯)": 10800000
                        },
                        "house_age": {
                        "10年屋": 13000000,
                        "20年屋": 12500000,
                        "30年屋": 10180000,
                        "40年屋": 7000000
                        }
                    }
                },
                districts: [],
                districtData:[]
                
        }
    },
    
    methods:{   
                taiwanChart(){

                    function moneyUnit(array){
                        let newArray = []
                        for (let i=0; i<array.length; i++){
                            newArray.push(array[i]/10000)   
                        }
                        return newArray
                    }
                    let labels = ['2013', '2014', '2015', '2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030']

                    let itemData1 = this.cityPrice.PreOwned.taipei
                    let itemData2 = this.cityPrice.PreOwned.newtaipei
                    let itemData3 = this.cityPrice.PreOwned.taoyuan
                    let itemData4 = this.cityPrice.PreOwned.hsinchu
                    let itemData5 = this.cityPrice.PreOwned.taichung
                    let itemData6 = this.cityPrice.PreOwned.tainan
                    let itemData7 = this.cityPrice.PreOwned.kaohsiung
                    
                    // let objectKeys = Object.keys(this.cityPrice.PreOwned)
                    let cityName = Object.keys(this.cityPrice.PreOwned) 
                    let cityNameCh = Object.values(this.cityEngToCh) 
                    // console.log(cityName.indexOf('taipei'))

                    // index = Object.keys(this.cityPrice.PreOwned).indexOf("taipei")
                    // console.log(cityNameCh[index])

                    const style={
                        pointStyle: 'circle',
                        pointRadius:5,
                        pointHoverRadius:15
                    }

                    const dash = (ctx, value)=> ctx.p0DataIndex > labels.indexOf('2023') ? value:[6,0];
                    const data = {
                        labels:labels,
                        datasets: [{
                            label: cityNameCh[0],
                            data: moneyUnit(itemData1),
                            borderColor: this.borderColor[0],
                            backgroundColor:this.backgroundColor[0],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,
                            tension:0.4,
                            segment:{
                                borderDash:ctx=>dash(ctx, [6,6]) || [6,0]
                            },
                        },
                        {   
                            label: cityNameCh[1],
                            data: moneyUnit(itemData2),
                            borderColor: this.borderColor[1],
                            backgroundColor:this.backgroundColor[1],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,
                            tension:0.4,
                            segment:{
                                borderDash:ctx=>dash(ctx, [6,6]) || [6,0]
                            },
                        },
                        {   
                            label: cityNameCh[2],
                            data: moneyUnit(itemData3),
                            borderColor: this.borderColor[2],
                            backgroundColor:this.backgroundColor[2],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,
                            tension:0.4,
                            segment:{
                                borderDash:ctx=>dash(ctx, [6,6]) || [6,0]
                            },
                        },
                        {   
                            label: cityNameCh[3],
                            data: moneyUnit(itemData4),
                            borderColor: this.borderColor[3],
                            backgroundColor:this.backgroundColor[3],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,
                            tension:0.4,
                            segment:{
                                borderDash:ctx=>dash(ctx, [6,6]) || [6,0]
                            },
                        },
                        {   
                            label: cityNameCh[4],
                            data: moneyUnit(itemData5),
                            borderColor: this.borderColor[4],
                            backgroundColor:this.backgroundColor[4],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,
                            tension:0.4,
                            segment:{
                                borderDash:ctx=>dash(ctx, [6,6]) || [6,0]
                            },
                        },
                        {   
                            label: cityNameCh[5],
                            data: moneyUnit(itemData6),
                            borderColor: this.borderColor[5],
                            backgroundColor:this.backgroundColor[5],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,
                            tension:0.4,
                            segment:{
                                borderDash:ctx=>dash(ctx, [6,6]) || [6,0]
                            },
                        },
                        {   
                            label: cityNameCh[6],
                            data: moneyUnit(itemData7),
                            borderColor: this.borderColor[6],
                            backgroundColor:this.backgroundColor[6],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,
                            tension:0.4,
                            segment:{
                                borderDash:ctx=>dash(ctx, [6,6]) || [6,0]
                            },
                        }

                        ]    
                    };

                    const config={
                        type:'line',
                        data: data,
                        options:{
                            scales:{
                                x:{
                                    ticks:{
                                        font:{
                                            size:15
                                        }
                                    },
                                    title:{
                                        display:true,
                                        text:"年份",
                                        font:{
                                            size:20
                                        }
                                    }
                                },
                                y:{
                                    ticks:{
                                        font:{
                                            size:15
                                        }
                                    },
                                    title:{
                                        display:true,
                                        text:"房價(萬)",
                                        font:{
                                            size:20
                                        },
                                    }
                                },
                            },
                            plugins: {
                                legend: {
                                    labels: {
                                        font: {
                                            size: 20  // 图例标签字体大小
                                        }
                                    }
                                }
                            }
                        },
                    };



                    if (this.chartInstance) {
                    this.chartInstance.destroy();
                }

                    this.chartInstance = new Chart(
                            document.getElementById('myChart'),
                            config
                        );
                },


                // updateChart(dataset){
                //     const isDataShown = dataset.target.checked
                //     console.log(isDataShown) 
                // }
                updateChart(event) {
                const checkbox = event.target;
                const datasetIndex = parseInt(checkbox.value);
                const isDataShown = checkbox.checked;

                if (isDataShown) {
                    this.chartInstance.getDatasetMeta(datasetIndex).hidden = false;
                } else {
                    this.chartInstance.getDatasetMeta(datasetIndex).hidden = true;
                }

                this.chartInstance.update();
            },

                transCityname(city){
                    const cityNames = {
                        taipei: '台北市',
                        newtaipei: '新北市',
                        taoyuan: '桃園市',
                        hsinchu: '新竹市',
                        taichung: '台中市',
                        tainan: '台南市',
                        kaohsiung: '高雄市'
                    };
                    return cityNames[city] || city
                },

                transNumberUnit(number){
                    return parseInt(number/10000)
                },
                upRate(x, y){
                    let uprate = (y-x)/x*100
                    return (uprate).toFixed(2)+'%'
                },
                callPrice_CityYear(city,year){
                    if (city == 'taipei'){
                        var output = this.cityPrice.PreOwned.taipei[this.years.indexOf(year)]
                    }
                    if (city == 'newtaipei'){
                        var output = this.cityPrice.PreOwned.newtaipei[this.years.indexOf(year)]
                    }
                    if (city == 'taoyuan'){
                        var output = this.cityPrice.PreOwned.taoyuan[this.years.indexOf(year)]
                    }
                    if (city == 'hsinchu'){
                        var output = this.cityPrice.PreOwned.hsinchu[this.years.indexOf(year)]
                    }
                    if (city == 'taichung'){
                        var output = this.cityPrice.PreOwned.taichung[this.years.indexOf(year)]
                    }
                    if (city == 'tainan'){
                        var output = this.cityPrice.PreOwned.tainan[this.years.indexOf(year)]
                    }
                    if (city == 'kaohsiung'){
                        var output = this.cityPrice.PreOwned.kaohsiung[this.years.indexOf(year)]
                    }
                    
                    return output/10000
                },
                updateDistricts() {
                    this.districts = Object.keys(this.cityDetail[this.selectedCity].district_prices) || [];
                    this.selectedDistrict = ''; // 清空已選擇的行政區
                    },
                getDistrictPrice() {
                     
                    if (this.selectedCity && this.selectedDistrict) {
                            this.districtData = this.cityDetail[this.selectedCity].district_prices[this.selectedDistrict];
                        }
                    this.selectedDistrict = '' 
                    if (!this.districtData[0]) {
                        this.districtData[0] = 0;
                    }
                    return this.transNumberUnit(this.districtData[0])
                    },    

        },
    computed:{

    }, 

    mounted(){
        this.taiwanChart()
    },

}
</script>


<template>
    <div class="top">

    </div>
    <div class="chartOuter">

        <div class="upImage">
            <img src="../assets/peko/houseUp.png" alt="">
        </div>

        <div class="chartArea">
            <h1>七都房價十年趨勢圖</h1>
            <canvas id = "myChart"></canvas>
        </div>
        
        <div class="checkboxArea">
            <div> 
                <input type="checkbox" id="Taipei" name="Taipei" 
                value="0"  checked="checkboxState" v-on:change="updateChart($event)">
                <label for="Taipei">台北市</label>
            </div>
            
            <div>
                <input type="checkbox" id="NewTaipei" name="NewTaipei" 
                value="1"  checked="this.checkboxState" v-on:change="updateChart($event)">
                <label for="NewTaipei">新北市</label>
            </div>
            <div>
                <input type="checkbox" id="Taoyuan" name="Taoyuan" 
                value="2"  checked="checkboxState" v-on:change="updateChart($event)">
                <label for="Taoyuan">桃園市</label>
            </div>
            <div>
                <input type="checkbox" id="hsinchu" name="hsinchu" 
                value="3"  checked="checkboxState" v-on:change="updateChart($event)">
                <label for="hsinchu">新竹市</label>
            </div>
            <div>
                <input type="checkbox" id="taichung" name="taichung" 
                value="4"  checked="checkboxState" v-on:change="updateChart($event)">
                <label for="taichung">台中市</label>
            </div>
            <div>
                <input type="checkbox" id="tainan" name="tainan" 
                value="5"  checked="checkboxState" v-on:change="updateChart($event)">
                <label for="tainan">台南市</label>
            </div>
            <div>
                <input type="checkbox" id="kaohsiung" name="kaohsiung" 
                value="6"  checked="checkboxState" v-on:change="updateChart($event)">
                <label for="kaohsiung">高雄市</label>
            </div>


            <div class="circle">

            </div>
        </div>

        <!-- <div class="tableArea">
            <table border="3">
            <thead>
                <tr>
                <th>縣市\年份</th>
                <th v-for="year in years" :key="year">{{ year }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(values, city) in cityPrice.PreOwned" :key="city">
                <td>{{ transCityname(city) }}</td>
                <td v-for="value in values" :key="value">{{ transNumberUnit(value) }}</td>
                </tr>
            </tbody>
            </table>
        </div> -->

    </div>

            
    <div class="tableArea">

        <div class="TableUpRate">
            <h1 class="uprateTitle">十年間七都房價上漲幅度</h1>
            <table>
                <thead>
                    <tr>
                        <th>都會區</th>
                        <th>2013年</th>
                        <th>2019年</th>
                        <th>2023年</th>
                        <th>十年漲幅</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>台北市</td>
                        <td>{{callPrice_CityYear('taipei','2013')}}</td>
                        <td>{{callPrice_CityYear('taipei','2019')}}</td>
                        <td>{{callPrice_CityYear('taipei','2023')}}</td>
                        <td>{{upRate(callPrice_CityYear('taipei','2013'),callPrice_CityYear('taipei','2023'))}}</td>
                    </tr>
                    <tr>
                        <td>新北市</td>
                        <td>{{callPrice_CityYear('newtaipei','2013')}}</td>
                        <td>{{callPrice_CityYear('newtaipei','2019')}}</td>
                        <td>{{callPrice_CityYear('newtaipei','2023')}}</td>
                        <td>{{upRate(callPrice_CityYear('newtaipei','2013'),callPrice_CityYear('newtaipei','2023'))}}</td>
                    </tr>
                    <tr>
                        <td>桃園市</td>
                        <td>{{callPrice_CityYear('taoyuan','2013')}}</td>
                        <td>{{callPrice_CityYear('taoyuan','2019')}}</td>
                        <td>{{callPrice_CityYear('taoyuan','2023')}}</td>
                        <td>{{upRate(callPrice_CityYear('taoyuan','2013'),callPrice_CityYear('taoyuan','2023'))}}</td>
                    </tr>
                    <tr>
                        <td>新竹市</td>
                        <td>{{callPrice_CityYear('hsinchu','2013')}}</td>
                        <td>{{callPrice_CityYear('hsinchu','2019')}}</td>
                        <td>{{callPrice_CityYear('hsinchu','2023')}}</td>
                        <td>{{upRate(callPrice_CityYear('hsinchu','2013'),callPrice_CityYear('hsinchu','2023'))}}</td>
                    </tr>
                    <tr>
                        <td>台中市</td>
                        <td>{{callPrice_CityYear('taichung','2013')}}</td>
                        <td>{{callPrice_CityYear('taichung','2019')}}</td>
                        <td>{{callPrice_CityYear('taichung','2023')}}</td>
                        <td>{{upRate(callPrice_CityYear('taichung','2013'),callPrice_CityYear('taichung','2023'))}}</td>
                    </tr>
                    <tr>
                        <td>台南市</td>
                        <td>{{callPrice_CityYear('tainan','2013')}}</td>
                        <td>{{callPrice_CityYear('tainan','2019')}}</td>
                        <td>{{callPrice_CityYear('tainan','2023')}}</td>
                        <td>{{upRate(callPrice_CityYear('tainan','2013'),callPrice_CityYear('tainan','2023'))}}</td>
                    </tr>
                    <tr>
                        <td>高雄市</td>
                        <td>{{callPrice_CityYear('kaohsiung','2013')}}</td>
                        <td>{{callPrice_CityYear('kaohsiung','2019')}}</td>
                        <td>{{callPrice_CityYear('kaohsiung','2023')}}</td>
                        <td>{{upRate(callPrice_CityYear('kaohsiung','2013'),callPrice_CityYear('kaohsiung','2023'))}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class = "selectionArea">
            <h1>房價點點看</h1>
            <select v-model="selectedCity" @change="updateDistricts">
                <option value = "" selected>選擇縣市</option>
                <option v-for="city in cities" :key="city" :value="city">
                    {{ city }}
                </option>
            </select>

            <!-- 行政區下拉選單 -->
            <select v-model="selectedDistrict">
                <option value = "" selected>選擇行政區</option>
                <option v-for="district in districts" :key="district" :value="district">
                    {{ district }}
                </option>
            </select>

            <div class="displayArea">
                <!-- <h1>{{selectedCity}}</h1> -->
                <!-- <h1>{{selectedDistrict}}</h1> -->
                <h1>房價中位數: {{getDistrictPrice()}} (萬)</h1>
            </div>

        </div>


        <!-- <div class="cityTableArea">
            <h1>台北各行政區房價</h1>
            <table>
                <thead>
                    <tr>
                        <th>行政區</th>
                        <th>房價中位數(萬)</th>
                        <th>交易量(筆)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, district) in cityDetail.taipei.district_prices" :key="district">
                        <td>{{district}}</td>
                        <td>{{ transNumberUnit(value[0]) }}</td>
                        <td>{{ value[1] }}</td>
                    </tr>
                </tbody>
            </table>
        </div> -->

        <!-- <div class="cityTableArea">
            <h1>新北各行政區房價</h1>
            <table>
                <thead>
                    <tr>
                        <th>行政區</th>
                        <th>房價中位數(萬)</th>
                        <th>交易量(筆)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, district) in cityDetail.newtaipei.district_prices" :key="district">
                        <td>{{district}}</td>
                        <td>{{ transNumberUnit(value[0]) }}</td>
                        <td>{{ value[1] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cityTableArea">
            <h1>桃園各行政區房價</h1>
            <table>
                <thead>
                    <tr>
                        <th>行政區</th>
                        <th>房價中位數(萬)</th>
                        <th>交易量(筆)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, district) in cityDetail.taoyuan.district_prices" :key="district">
                        <td>{{district}}</td>
                        <td>{{ transNumberUnit(value[0]) }}</td>
                        <td>{{ value[1] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cityTableArea">
            <h1>新竹各行政區房價</h1>
            <table>
                <thead>
                    <tr>
                        <th>行政區</th>
                        <th>房價中位數(萬)</th>
                        <th>交易量(筆)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, district) in cityDetail.hsinchu.district_prices" :key="district">
                        <td>{{district}}</td>
                        <td>{{ transNumberUnit(value[0]) }}</td>
                        <td>{{ value[1] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cityTableArea">
            <h1>台中各行政區房價</h1>
            <table>
                <thead>
                    <tr>
                        <th>行政區</th>
                        <th>房價中位數(萬)</th>
                        <th>交易量(筆)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, district) in cityDetail.taichung.district_prices" :key="district">
                        <td>{{district}}</td>
                        <td>{{ transNumberUnit(value[0]) }}</td>
                        <td>{{ value[1] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cityTableArea">
            <h1>台南各行政區房價</h1>
            <table>
                <thead>
                    <tr>
                        <th>行政區</th>
                        <th>房價中位數(萬)</th>
                        <th>交易量(筆)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, district) in cityDetail.tainan.district_prices" :key="district">
                        <td>{{district}}</td>
                        <td>{{ transNumberUnit(value[0]) }}</td>
                        <td>{{ value[1] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cityTableArea">
            <h1>高雄各行政區房價</h1>
            <table>
                <thead>
                    <tr>
                        <th>行政區</th>
                        <th>房價中位數(萬)</th>
                        <th>交易量(筆)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, district) in cityDetail.kaohsiung.district_prices" :key="district">
                        <td>{{district}}</td>
                        <td>{{ transNumberUnit(value[0]) }}</td>
                        <td>{{ value[1] }}</td>
                    </tr>
                </tbody>
            </table>
        </div> -->
    </div>

 




    
</template>

<style scoped lang="scss">

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
    //  background-color: #e5e5f7;
    // background-color:#F1EFE5;
    // font-family: "Shippori Mincho", serif;
    font-family: "Zen Old Mincho", serif;
    // font-weight: 200;
    // font-style: normal;
    background-color:#F1EFE5;
    }

.top{
    width: 100dvw;
    height: 5dvh;
}    

.chartOuter{
    background-color:#F1EFE5;
    width: 100dvw;
    height: 100dvh;

    .chartArea{
        width: 90%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2%;  
        padding-right: 10%;
        opacity: 1;
        z-index: 99;

            h1{
            padding-left: 10%;
            font-size: 55px;
            writing-mode: vertical-lr ;
            color: black;
            }
            #myChart{
                margin-top: 5%;
                padding-left: 5%;
            }
            
    }
    .checkboxArea{
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: left;
        padding-left: 20%;
        margin-bottom: 5%;
    }

    .houseImage{
        width: 300px;
        height: 300px;
        position: absolute;
        overflow: hidden;
        left: 10%;
        top:10%;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }

    .upImage{
        width: 250px;
        height: 250px;
        position: absolute;
        overflow: hidden;
        right: 0;
        top:55%;
        background-color: transparent;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }

    .circle{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: rgb(232, 157, 59);
        border-radius: 50%;
        right:10%;
        bottom: 10%;
        opacity: 0.5;
    }


}

.tableArea{
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-spacing:0;
    font-size: 20px;
    flex-wrap: wrap;
    padding-bottom: 250px;
    padding-right: 150px;
    color: black;
    
    th{
        background-color: rgb(240, 211, 211);
        color: black;
    }
    
    th,td{
        padding: 10px;
        text-align: center;
        color: black;
    }
    .TableUpRate{
        position: absolute;
        left: 0;
        top: 150;
        width: 50%;
        height: 50%;
        padding-left: 50px;
        margin-left: 150px;
        margin-bottom: 100px;
        padding-bottom: 50px;
    }

    .selectionArea{
    position: absolute;
    width: 50dvw;
    height: 30dvh;
    // padding-left: 300px;
    padding-top: -100px;
    margin-left: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    select{
        margin: 10px;
    }
    h1{
        font-size: 50px;
        padding-bottom: 10px;
        padding-right:0px;
        color: black;
        padding: 20px;
        position: relative;
        &:before{
            content: "";
            background-color: rgb(252, 146, 183);
            width: 100%;
            height: 5px;
            position: absolute;
            left: 0;
            bottom: 5px;

        }
    }
    .displayArea{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 80px;
        // padding-right: 100px;
        // margin-right:400px;
        // background-color: #8A8675;
        

        h1{
            font-size: 40px;}
            color: black;
    }
  }
}





</style>