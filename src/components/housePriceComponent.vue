<script>
export default{
    data(){
        return{
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

                borderColor:[
                    'rgba(249, 65, 68,1)',
                    'rgba(243, 114, 44,1)',
                    'rgba(248, 150, 30,1)',
                    'rgba(249, 199, 79,1)',
                    'rgba(144, 190, 109,1)',
                    'rgba(67, 170, 139,1)',
                    'rgba(87, 117, 144,1)',
                ],
                backgroundColor:[
                    'rgba(249, 65, 68,0.2)',
                    'rgba(243, 114, 44,0.2)',
                    'rgba(248, 150, 30,0.2)',
                    'rgba(249, 199, 79,0.2)',
                    'rgba(144, 190, 109,0.2)',
                    'rgba(67, 170, 139,0.2)',
                    'rgba(87, 117, 144,0.2)',
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
                           
                        },
                        {   
                            label: cityNameCh[1],
                            data: moneyUnit(itemData2),
                            borderColor: this.borderColor[1],
                            backgroundColor:this.backgroundColor[1],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,

                        },
                        {   
                            label: cityNameCh[2],
                            data: moneyUnit(itemData3),
                            borderColor: this.borderColor[2],
                            backgroundColor:this.backgroundColor[2],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,

                        },
                        {   
                            label: cityNameCh[3],
                            data: moneyUnit(itemData4),
                            borderColor: this.borderColor[3],
                            backgroundColor:this.backgroundColor[3],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,

                        },
                        {   
                            label: cityNameCh[4],
                            data: moneyUnit(itemData5),
                            borderColor: this.borderColor[4],
                            backgroundColor:this.backgroundColor[4],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,

                        },
                        {   
                            label: cityNameCh[5],
                            data: moneyUnit(itemData6),
                            borderColor: this.borderColor[5],
                            backgroundColor:this.backgroundColor[5],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,

                        },
                        {   
                            label: cityNameCh[6],
                            data: moneyUnit(itemData7),
                            borderColor: this.borderColor[6],
                            backgroundColor:this.backgroundColor[6],
                            pointStyle:style.pointStyle,
                            pointRadius:style.pointRadius,
                            pointHoverRadius:style.pointHoverRadius,

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
                                        text:"收入(萬)",
                                        font:{
                                            size:20
                                        },
                                    }
                                },
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


        },

    mounted(){
        this.taiwanChart()
    },

}
</script>


<template>
    <div class="chartOuter">
        <div class="chartArea">
            <h1>七都房價10年趨勢圖</h1>
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
        </div>
    </div>
</template>

<style scoped lang="scss">

*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;   
 background-color: #e5e5f7;
// font-family: "Shippori Mincho", serif;
font-family: "Zen Old Mincho", serif;
// font-weight: 200;
// font-style: normal;
}
.chartOuter{

    width: 100dvw;
    height: 100dvh;
    .chartArea{

        width: 80%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10%;
        opacity: 1;
    }
    .checkboxArea{
        width: 100%;
        height: 100%;
        display: flex;
        // align-items: center;
        justify-content: center;
    }

}
</style>