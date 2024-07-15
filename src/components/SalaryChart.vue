<script>
import salData1 from '../assets/111 sal1.json'
import salData2 from '../assets/111 sal2.json'
import salTitle1 from '../assets/111 saljsti.json'
import salTitle2 from '../assets/111 saljs2ti.json'


export default {
    data() { // data:function ()
        return {

            salDataSet1: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
            ],

            salDataSet2: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
            ],

            checked1: "",
            checked2: "",
            checked3: "",
            checked4: "",
            checked5: "",
            Title1: [],
            Title2: [],
            
            reset:0,
        }
    },

    // 自訂方法格式:
    methods: {
        Tester() {

            let labels = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
            var itemData1 = []
            var itemData2 = []
            var itemData3 = []
            var itemData4 = []
            var itemData5 = []

            if (this.checked1 <= 50) {
                itemData1 = this.salDataSet1[this.checked1 - 1];
            }else if(this.checked1 > 50){
                itemData1 = this.salDataSet2[this.checked1 - 51]
            }
            if (this.checked2 <= 50) {
                itemData2 = this.salDataSet1[this.checked2 - 1];
            }else if(this.checked2 > 50){
                itemData2 = this.salDataSet2[this.checked2 - 51]
            }
            if (this.checked3 <= 50) {
                itemData3 = this.salDataSet1[this.checked3 - 1];
            }else if(this.checked3 > 50){
                itemData3 = this.salDataSet2[this.checked3 - 51]
            }
            if (this.checked4 <= 50) {
                itemData4 = this.salDataSet1[this.checked4 - 1];
            }else if(this.checked4 > 50){
                itemData4 = this.salDataSet2[this.checked4 - 51]
            }
            if (this.checked5 <= 50) {
                itemData5 = this.salDataSet1[this.checked5 - 1];
            }else if(this.checked5 > 50){
                itemData5 = this.salDataSet2[this.checked5 - 51]
            }

            const data = {
                labels: labels,
                datasets: [{
                    label: '欄位1',
                    data: itemData1,
                    borderColor: 'rgb(255,0,0)',
                    backgroundColor: 'rgb(66,221,245)'
                },
                    {   
                        label: '欄位2',
                        data: itemData2,
                        borderColor: 'rgb(0,25,25)',
                        backgroundColor:'rgb(66,221,200)'
                    },
                    {   
                        label: '欄位3',
                        data: itemData3,
                        borderColor: 'rgb(0,0,0)',
                        backgroundColor:'rgb(66,10,245)'
                    },
                    {   
                        label: '欄位4',
                        data: itemData4,
                        borderColor: 'rgb(100,100,50)',
                        backgroundColor:'rgb(66,2,25)'
                    },
                    {   
                        label: this.Title1[this.checked5],
                        data: itemData5,
                        borderColor: 'rgb(50,55,50)',
                        backgroundColor:'rgb(6,21,25)'
                    }
                ]
            };

            const config = {
                type: 'line',
                data: data
            };
            
            console.log(itemData1);
            console.log(itemData2);
            console.log(itemData3);
            console.log(itemData4);
            console.log(itemData5);

            var chart;
            if(this.reset == 0){
                if(chart){
                    chart.destroy();
                }
                chart = new Chart(
                document.getElementById('myChart'),
                config,
                this.reset++
                )
            }else{
                $('#myChart').remove();
                $('#container').append('<canvas id="myChart" ></canvas>');
                chart = new Chart(
                document.getElementById('myChart'),
                config,
                )
            }
        },
    },
    created() {
        this.Title1 = salTitle1[0].need1
        this.Title2 = salTitle2[0].need2
        
        salData1.forEach(element => {
                var x = 0;
                this.salDataSet1.forEach(element2 => {
                    this.salDataSet1[x].push(element[""][x + 2])
                    x++;
                })
            });

        salData2.forEach(element => {
            var y = 0;
            this.salDataSet2.forEach(element2 => {
                this.salDataSet2[y].push(element[""][y + 1])
                y++;
                })
            });
            
    }
}
</script>

<template>
    <button @click="Tester()">Btn</button>
    <select name="" id="" v-model="this.checked1">
        <option value="">請選擇</option>
        <option value="1">{{ this.Title1[2] }}</option>
        <option value="2">{{ this.Title1[3] }}</option>
        <option value="3">{{ this.Title1[5] }}</option>
        <option value="4">{{ this.Title1[6] }}</option>
        <option value="5">{{ this.Title1[7] }}</option>
        <option value="6">{{ this.Title1[8] }}</option>
        <option value="7">{{ this.Title1[9] }}</option>
        <option value="8">{{ this.Title1[10] }}</option>
        <option value="9">{{ this.Title1[12] }}</option>
        <option value="10">{{ this.Title1[13] }}</option>
        <option value="11">{{ this.Title1[14] }}</option>
        <option value="12">{{ this.Title1[15] }}</option>
        <option value="13">{{ this.Title1[17] }}</option>
        <option value="14">{{ this.Title1[18] }}</option>
        <option value="15">{{ this.Title1[19] }}</option>
        <option value="16">{{ this.Title1[20] }}</option>
        <option value="17">{{ this.Title1[21] }}</option>
        <option value="18">{{ this.Title1[22] }}</option>
        <option value="19">{{ this.Title1[23] }}</option>
        <option value="20">{{ this.Title1[24] }}</option>
        <option value="21">{{ this.Title1[25] }}</option>
        <option value="22">{{ this.Title1[26] }}</option>
        <option value="23">{{ this.Title1[27] }}</option>
        <option value="24">{{ this.Title1[28] }}</option>
        <option value="25">{{ this.Title1[29] }}</option>
        <option value="26">{{ this.Title1[30] }}</option>
        <option value="27">{{ this.Title1[31] }}</option>
        <option value="28">{{ this.Title1[32] }}</option>
        <option value="29">{{ this.Title1[32] }}</option>
        <option value="30">{{ this.Title1[34] }}</option>
        <option value="31">{{ this.Title1[35] }}</option>
        <option value="32">{{ this.Title1[36] }}</option>
        <option value="33">{{ this.Title1[37] }}</option>
        <option value="34">{{ this.Title1[38] }}</option>
        <option value="35">{{ this.Title1[39] }}</option>
        <option value="36">{{ this.Title1[40] }}</option>
        <option value="47">{{ this.Title1[54] }}</option>
        <option value="50">{{ this.Title1[57] }}</option>
        
        <option value="55">{{ this.Title2[4] }}</option>
        <option value="57">{{ this.Title2[6] }}</option>
        <option value="59">{{ this.Title2[8] }}</option>
        <option value="61">{{ this.Title2[10] }}</option>
        <option value="62">{{ this.Title2[11] }}</option>
        <option value="70">{{ this.Title2[19] }}</option>
        <option value="71">{{ this.Title2[20] }}</option>
        <option value="72">{{ this.Title2[21] }}</option>
        <option value="75">{{ this.Title2[24] }}</option>
        <option value="76">{{ this.Title2[25] }}</option>
        <option value="77">{{ this.Title2[26] }}</option>
        <option value="78">{{ this.Title2[27] }}</option>
        <option value="80">{{ this.Title2[29] }}</option>
        <option value="81">{{ this.Title2[30] }}</option>
        <option value="82">{{ this.Title2[31] }}</option>
        <option value="83">{{ this.Title2[32] }}</option>
        <option value="85">{{ this.Title2[34] }}</option>
        <option value="86">{{ this.Title2[35] }}</option>
    </select>

    <select name="" id="" v-model="this.checked2">
        <option value="">請選擇</option>
        <option value="1">{{ this.Title1[2] }}</option>
        <option value="2">{{ this.Title1[3] }}</option>
        <option value="3">{{ this.Title1[5] }}</option>
        <option value="4">{{ this.Title1[6] }}</option>
        <option value="5">{{ this.Title1[7] }}</option>
        <option value="6">{{ this.Title1[8] }}</option>
        <option value="7">{{ this.Title1[9] }}</option>
        <option value="8">{{ this.Title1[10] }}</option>
        <option value="9">{{ this.Title1[12] }}</option>
        <option value="10">{{ this.Title1[13] }}</option>
        <option value="11">{{ this.Title1[14] }}</option>
        <option value="12">{{ this.Title1[15] }}</option>
        <option value="13">{{ this.Title1[17] }}</option>
        <option value="14">{{ this.Title1[18] }}</option>
        <option value="15">{{ this.Title1[19] }}</option>
        <option value="16">{{ this.Title1[20] }}</option>
        <option value="17">{{ this.Title1[21] }}</option>
        <option value="18">{{ this.Title1[22] }}</option>
        <option value="19">{{ this.Title1[23] }}</option>
        <option value="20">{{ this.Title1[24] }}</option>
        <option value="21">{{ this.Title1[25] }}</option>
        <option value="22">{{ this.Title1[26] }}</option>
        <option value="23">{{ this.Title1[27] }}</option>
        <option value="24">{{ this.Title1[28] }}</option>
        <option value="25">{{ this.Title1[29] }}</option>
        <option value="26">{{ this.Title1[30] }}</option>
        <option value="27">{{ this.Title1[31] }}</option>
        <option value="28">{{ this.Title1[32] }}</option>
        <option value="29">{{ this.Title1[32] }}</option>
        <option value="30">{{ this.Title1[34] }}</option>
        <option value="31">{{ this.Title1[35] }}</option>
        <option value="32">{{ this.Title1[36] }}</option>
        <option value="33">{{ this.Title1[37] }}</option>
        <option value="34">{{ this.Title1[38] }}</option>
        <option value="35">{{ this.Title1[39] }}</option>
        <option value="36">{{ this.Title1[40] }}</option>
        <option value="47">{{ this.Title1[54] }}</option>
        <option value="50">{{ this.Title1[57] }}</option>
        
        <option value="55">{{ this.Title2[4] }}</option>
        <option value="57">{{ this.Title2[6] }}</option>
        <option value="59">{{ this.Title2[8] }}</option>
        <option value="61">{{ this.Title2[10] }}</option>
        <option value="62">{{ this.Title2[11] }}</option>
        <option value="70">{{ this.Title2[19] }}</option>
        <option value="71">{{ this.Title2[20] }}</option>
        <option value="72">{{ this.Title2[21] }}</option>
        <option value="75">{{ this.Title2[24] }}</option>
        <option value="76">{{ this.Title2[25] }}</option>
        <option value="77">{{ this.Title2[26] }}</option>
        <option value="78">{{ this.Title2[27] }}</option>
        <option value="80">{{ this.Title2[29] }}</option>
        <option value="81">{{ this.Title2[30] }}</option>
        <option value="82">{{ this.Title2[31] }}</option>
        <option value="83">{{ this.Title2[32] }}</option>
        <option value="85">{{ this.Title2[34] }}</option>
        <option value="86">{{ this.Title2[35] }}</option>
    </select>

    <select name="" id="" v-model="this.checked3">
        <option value="">請選擇</option>
        <option value="1">{{ this.Title1[2] }}</option>
        <option value="2">{{ this.Title1[3] }}</option>
        <option value="3">{{ this.Title1[5] }}</option>
        <option value="4">{{ this.Title1[6] }}</option>
        <option value="5">{{ this.Title1[7] }}</option>
        <option value="6">{{ this.Title1[8] }}</option>
        <option value="7">{{ this.Title1[9] }}</option>
        <option value="8">{{ this.Title1[10] }}</option>
        <option value="9">{{ this.Title1[12] }}</option>
        <option value="10">{{ this.Title1[13] }}</option>
        <option value="11">{{ this.Title1[14] }}</option>
        <option value="12">{{ this.Title1[15] }}</option>
        <option value="13">{{ this.Title1[17] }}</option>
        <option value="14">{{ this.Title1[18] }}</option>
        <option value="15">{{ this.Title1[19] }}</option>
        <option value="16">{{ this.Title1[20] }}</option>
        <option value="17">{{ this.Title1[21] }}</option>
        <option value="18">{{ this.Title1[22] }}</option>
        <option value="19">{{ this.Title1[23] }}</option>
        <option value="20">{{ this.Title1[24] }}</option>
        <option value="21">{{ this.Title1[25] }}</option>
        <option value="22">{{ this.Title1[26] }}</option>
        <option value="23">{{ this.Title1[27] }}</option>
        <option value="24">{{ this.Title1[28] }}</option>
        <option value="25">{{ this.Title1[29] }}</option>
        <option value="26">{{ this.Title1[30] }}</option>
        <option value="27">{{ this.Title1[31] }}</option>
        <option value="28">{{ this.Title1[32] }}</option>
        <option value="29">{{ this.Title1[32] }}</option>
        <option value="30">{{ this.Title1[34] }}</option>
        <option value="31">{{ this.Title1[35] }}</option>
        <option value="32">{{ this.Title1[36] }}</option>
        <option value="33">{{ this.Title1[37] }}</option>
        <option value="34">{{ this.Title1[38] }}</option>
        <option value="35">{{ this.Title1[39] }}</option>
        <option value="36">{{ this.Title1[40] }}</option>
        <option value="47">{{ this.Title1[54] }}</option>
        <option value="50">{{ this.Title1[57] }}</option>
        
        <option value="55">{{ this.Title2[4] }}</option>
        <option value="57">{{ this.Title2[6] }}</option>
        <option value="59">{{ this.Title2[8] }}</option>
        <option value="61">{{ this.Title2[10] }}</option>
        <option value="62">{{ this.Title2[11] }}</option>
        <option value="70">{{ this.Title2[19] }}</option>
        <option value="71">{{ this.Title2[20] }}</option>
        <option value="72">{{ this.Title2[21] }}</option>
        <option value="75">{{ this.Title2[24] }}</option>
        <option value="76">{{ this.Title2[25] }}</option>
        <option value="77">{{ this.Title2[26] }}</option>
        <option value="78">{{ this.Title2[27] }}</option>
        <option value="80">{{ this.Title2[29] }}</option>
        <option value="81">{{ this.Title2[30] }}</option>
        <option value="82">{{ this.Title2[31] }}</option>
        <option value="83">{{ this.Title2[32] }}</option>
        <option value="85">{{ this.Title2[34] }}</option>
        <option value="86">{{ this.Title2[35] }}</option>
    </select>

    <select name="" id="" v-model="this.checked4">
        <option value="">請選擇</option>
        <option value="1">{{ this.Title1[2] }}</option>
        <option value="2">{{ this.Title1[3] }}</option>
        <option value="3">{{ this.Title1[5] }}</option>
        <option value="4">{{ this.Title1[6] }}</option>
        <option value="5">{{ this.Title1[7] }}</option>
        <option value="6">{{ this.Title1[8] }}</option>
        <option value="7">{{ this.Title1[9] }}</option>
        <option value="8">{{ this.Title1[10] }}</option>
        <option value="9">{{ this.Title1[12] }}</option>
        <option value="10">{{ this.Title1[13] }}</option>
        <option value="11">{{ this.Title1[14] }}</option>
        <option value="12">{{ this.Title1[15] }}</option>
        <option value="13">{{ this.Title1[17] }}</option>
        <option value="14">{{ this.Title1[18] }}</option>
        <option value="15">{{ this.Title1[19] }}</option>
        <option value="16">{{ this.Title1[20] }}</option>
        <option value="17">{{ this.Title1[21] }}</option>
        <option value="18">{{ this.Title1[22] }}</option>
        <option value="19">{{ this.Title1[23] }}</option>
        <option value="20">{{ this.Title1[24] }}</option>
        <option value="21">{{ this.Title1[25] }}</option>
        <option value="22">{{ this.Title1[26] }}</option>
        <option value="23">{{ this.Title1[27] }}</option>
        <option value="24">{{ this.Title1[28] }}</option>
        <option value="25">{{ this.Title1[29] }}</option>
        <option value="26">{{ this.Title1[30] }}</option>
        <option value="27">{{ this.Title1[31] }}</option>
        <option value="28">{{ this.Title1[32] }}</option>
        <option value="29">{{ this.Title1[32] }}</option>
        <option value="30">{{ this.Title1[34] }}</option>
        <option value="31">{{ this.Title1[35] }}</option>
        <option value="32">{{ this.Title1[36] }}</option>
        <option value="33">{{ this.Title1[37] }}</option>
        <option value="34">{{ this.Title1[38] }}</option>
        <option value="35">{{ this.Title1[39] }}</option>
        <option value="36">{{ this.Title1[40] }}</option>
        <option value="47">{{ this.Title1[54] }}</option>
        <option value="50">{{ this.Title1[57] }}</option>
        
        <option value="55">{{ this.Title2[4] }}</option>
        <option value="57">{{ this.Title2[6] }}</option>
        <option value="59">{{ this.Title2[8] }}</option>
        <option value="61">{{ this.Title2[10] }}</option>
        <option value="62">{{ this.Title2[11] }}</option>
        <option value="70">{{ this.Title2[19] }}</option>
        <option value="71">{{ this.Title2[20] }}</option>
        <option value="72">{{ this.Title2[21] }}</option>
        <option value="75">{{ this.Title2[24] }}</option>
        <option value="76">{{ this.Title2[25] }}</option>
        <option value="77">{{ this.Title2[26] }}</option>
        <option value="78">{{ this.Title2[27] }}</option>
        <option value="80">{{ this.Title2[29] }}</option>
        <option value="81">{{ this.Title2[30] }}</option>
        <option value="82">{{ this.Title2[31] }}</option>
        <option value="83">{{ this.Title2[32] }}</option>
        <option value="85">{{ this.Title2[34] }}</option>
        <option value="86">{{ this.Title2[35] }}</option>
    </select>

    <select name="" id="" v-model="this.checked5">
        <option value="">請選擇</option>
        <option value="1">{{ this.Title1[2] }}</option>
        <option value="2">{{ this.Title1[3] }}</option>
        <option value="3">{{ this.Title1[5] }}</option>
        <option value="4">{{ this.Title1[6] }}</option>
        <option value="5">{{ this.Title1[7] }}</option>
        <option value="6">{{ this.Title1[8] }}</option>
        <option value="7">{{ this.Title1[9] }}</option>
        <option value="8">{{ this.Title1[10] }}</option>
        <option value="9">{{ this.Title1[12] }}</option>
        <option value="10">{{ this.Title1[13] }}</option>
        <option value="11">{{ this.Title1[14] }}</option>
        <option value="12">{{ this.Title1[15] }}</option>
        <option value="13">{{ this.Title1[17] }}</option>
        <option value="14">{{ this.Title1[18] }}</option>
        <option value="15">{{ this.Title1[19] }}</option>
        <option value="16">{{ this.Title1[20] }}</option>
        <option value="17">{{ this.Title1[21] }}</option>
        <option value="18">{{ this.Title1[22] }}</option>
        <option value="19">{{ this.Title1[23] }}</option>
        <option value="20">{{ this.Title1[24] }}</option>
        <option value="21">{{ this.Title1[25] }}</option>
        <option value="22">{{ this.Title1[26] }}</option>
        <option value="23">{{ this.Title1[27] }}</option>
        <option value="24">{{ this.Title1[28] }}</option>
        <option value="25">{{ this.Title1[29] }}</option>
        <option value="26">{{ this.Title1[30] }}</option>
        <option value="27">{{ this.Title1[31] }}</option>
        <option value="28">{{ this.Title1[32] }}</option>
        <option value="29">{{ this.Title1[32] }}</option>
        <option value="30">{{ this.Title1[34] }}</option>
        <option value="31">{{ this.Title1[35] }}</option>
        <option value="32">{{ this.Title1[36] }}</option>
        <option value="33">{{ this.Title1[37] }}</option>
        <option value="34">{{ this.Title1[38] }}</option>
        <option value="35">{{ this.Title1[39] }}</option>
        <option value="36">{{ this.Title1[40] }}</option>
        <option value="47">{{ this.Title1[54] }}</option>
        <option value="50">{{ this.Title1[57] }}</option>
        
        <option value="55">{{ this.Title2[4] }}</option>
        <option value="57">{{ this.Title2[6] }}</option>
        <option value="59">{{ this.Title2[8] }}</option>
        <option value="61">{{ this.Title2[10] }}</option>
        <option value="62">{{ this.Title2[11] }}</option>
        <option value="70">{{ this.Title2[19] }}</option>
        <option value="71">{{ this.Title2[20] }}</option>
        <option value="72">{{ this.Title2[21] }}</option>
        <option value="75">{{ this.Title2[24] }}</option>
        <option value="76">{{ this.Title2[25] }}</option>
        <option value="77">{{ this.Title2[26] }}</option>
        <option value="78">{{ this.Title2[27] }}</option>
        <option value="80">{{ this.Title2[29] }}</option>
        <option value="81">{{ this.Title2[30] }}</option>
        <option value="82">{{ this.Title2[31] }}</option>
        <option value="83">{{ this.Title2[32] }}</option>
        <option value="85">{{ this.Title2[34] }}</option>
        <option value="86">{{ this.Title2[35] }}</option>
    </select>

    <h1>{{ this.checked1 }}</h1>
    <h1>{{ this.checked2 }}</h1>
    <h1>{{ this.checked3 }}</h1>
    <h1>{{ this.checked4 }}</h1>
    <h1>{{ this.checked5 }}</h1>
    <div style="width:900px; height:400px;" id="container">
        <canvas id="myChart" ></canvas>
    </div>
</template>

<style scoped lang="scss"></style>