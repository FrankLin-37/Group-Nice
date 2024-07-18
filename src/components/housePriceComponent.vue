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
                    'rgba(95, 15, 64,1)',
                    'rgba(154, 3, 30,1)',
                    'rgba(251, 139, 36,1)',
                    'rgba(227, 100, 20,1)',
                    'rgba(15, 76, 92,1)',
                    'rgba(249, 65, 68,1)',
                    'rgba(42, 157, 143,1)',
                ],
                backgroundColor:[
                    'rgba(95, 15, 64,0.2)',
                    'rgba(154, 3, 30,0.2)',
                    'rgba(251, 139, 36,0.2)',
                    'rgba(227, 100, 20,0.2)',
                    'rgba(15, 76, 92,0.2)',
                    'rgba(249, 65, 68,0.2)',
                    'rgba(42, 157, 143,0.2)',
                ],


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

                    const dash = (ctx, value)=> ctx.p0DataIndex > labels.indexOf('2022') ? value:[6,0];
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
                }


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
                value="0"  checked="" v-on:change="updateChart($event)">
                <label for="Taipei">台北市</label>
            </div>
            
            <div>
                <input type="checkbox" id="NewTaipei" name="NewTaipei" 
                value="1"  checked="" v-on:change="updateChart($event)">
                <label for="NewTaipei">新北市</label>
            </div>
            <div>
                <input type="checkbox" id="Taoyuan" name="Taoyuan" 
                value="2"  checked="" v-on:change="updateChart($event)">
                <label for="Taoyuan">桃園市</label>
            </div>
            <div>
                <input type="checkbox" id="hsinchu" name="hsinchu" 
                value="3"  checked="" v-on:change="updateChart($event)">
                <label for="hsinchu">新竹市</label>
            </div>
            <div>
                <input type="checkbox" id="taichung" name="taichung" 
                value="4"  checked="" v-on:change="updateChart($event)">
                <label for="taichung">台中市</label>
            </div>
            <div>
                <input type="checkbox" id="tainan" name="tainan" 
                value="5"  checked="" v-on:change="updateChart($event)">
                <label for="tainan">台南市</label>
            </div>
            <div>
                <input type="checkbox" id="kaohsiung" name="kaohsiung" 
                value="6"  checked="" v-on:change="updateChart($event)">
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
    <div class="tableArea">
        <h1>十年間七都房價上漲幅度</h1>
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

    </div>
</template>

<style scoped lang="scss">

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
    //  background-color: #e5e5f7;
    background-color:#F1EFE5;
    // font-family: "Shippori Mincho", serif;
    font-family: "Zen Old Mincho", serif;
    // font-weight: 200;
    // font-style: normal;
    }

.top{
    width: 100dvw;
    height: 5dvh;
}    

.chartOuter{

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
    background-color: #F8C3CD;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-spacing:0;
    font-size: 20px;
    
    th{
        background-color: #e293a2;
    }
    
    th,td{
        padding: 10px;
        text-align: center;
    }

}
</style>