<script>
import salData1 from '../assets/111 sal total.json'
import salTitle1 from '../assets/111 saljsti.json'

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
            reset:0,
        }
    },

    // 自訂方法格式:
    methods: {
        Tester() {

        },
        createlabel(){
            
            let labels = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
            
            var itemData1 = []
            var itemData2 = []
            var itemData3 = []
            var itemData4 = []
            var itemData5 = []

            if (this.checked1 > 0 ) {
                itemData1 = this.salDataSet1[this.checked1 - 1];
            }

            if (this.checked2 > 0) {
                itemData2 = this.salDataSet1[this.checked2 - 1];
            }
            if (this.checked3 > 0) {
                itemData3 = this.salDataSet1[this.checked3 - 1];
            }
            if (this.checked4 > 0) {
                itemData4 = this.salDataSet1[this.checked4 - 1];
            }
            if (this.checked5 > 0) {
                itemData5 = this.salDataSet1[this.checked5 - 1];
            }

            const data = {
                labels: labels,
                datasets: [{
                    label: this.Title1[this.checked1-1],
                    data: itemData1,
                    borderColor: 'rgb(255,0,0)',
                    backgroundColor: 'rgb(66,221,245)'
                },
                    {   
                        label: this.Title1[this.checked2-1],
                        data: itemData2,
                        borderColor: 'rgb(0,25,25)',
                        backgroundColor:'rgb(66,221,200)'
                    },
                    {   
                        label: this.Title1[this.checked3-1],
                        data: itemData3,
                        borderColor: 'rgb(0,0,0)',
                        backgroundColor:'rgb(66,10,245)'
                    },
                    {   
                        label: this.Title1[this.checked4-1],
                        data: itemData4,
                        borderColor: 'rgb(100,100,50)',
                        backgroundColor:'rgb(66,2,25)'
                    },
                    {   
                        label: this.Title1[this.checked5-1],
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
        }
    },
    created() {
        this.Title1 = salTitle1[0].need1
        
        salData1.forEach(element => {
                var x = 0;
                this.salDataSet1.forEach(element2 => {
                    this.salDataSet1[x].push(element[""][x+1])
                    x++;
                })
            });
    }
}
</script>

<template>
    <button @click="Tester()">Btn</button>
    <select name="" id="" v-model="this.checked1" @change =  "this.createlabel()">
        <option value="">請選擇</option>
        <option value="1">{{ this.Title1[0] }}</option>
        <option value="2">{{ this.Title1[1] }}</option>
        <option value="3">{{ this.Title1[2] }}</option>
        <option value="4">{{ this.Title1[3] }}</option>
        <option value="5">{{ this.Title1[4] }}</option>
        <option value="6">{{ this.Title1[5] }}</option>
        <option value="7">{{ this.Title1[6] }}</option>
        <option value="8">{{ this.Title1[7] }}</option>
        <option value="9">{{ this.Title1[8] }}</option>
        <option value="10">{{ this.Title1[9] }}</option>
        <option value="11">{{ this.Title1[10] }}</option>
        <option value="12">{{ this.Title1[11] }}</option>
        <option value="13">{{ this.Title1[12] }}</option>
        <option value="14">{{ this.Title1[13] }}</option>
        <option value="15">{{ this.Title1[14] }}</option>
        <option value="16">{{ this.Title1[15] }}</option>
        <option value="17">{{ this.Title1[16] }}</option>
        <option value="18">{{ this.Title1[17] }}</option>
        <option value="19">{{ this.Title1[18] }}</option>
        <option value="20">{{ this.Title1[19] }}</option>
        <option value="21">{{ this.Title1[20] }}</option>
        <option value="22">{{ this.Title1[21] }}</option>
        <option value="23">{{ this.Title1[22] }}</option>
        <option value="24">{{ this.Title1[23] }}</option>
        <option value="25">{{ this.Title1[24] }}</option>
        <option value="26">{{ this.Title1[25] }}</option>
        <option value="27">{{ this.Title1[26] }}</option>
        <option value="28">{{ this.Title1[27] }}</option>
        <option value="29">{{ this.Title1[28] }}</option>
        <option value="30">{{ this.Title1[29] }}</option>
        <option value="31">{{ this.Title1[30] }}</option>
        <option value="32">{{ this.Title1[31] }}</option>
        <option value="33">{{ this.Title1[32] }}</option>
        <option value="34">{{ this.Title1[33] }}</option>
        <option value="35">{{ this.Title1[34] }}</option>
        <option value="36">{{ this.Title1[35] }}</option>
        <option value="37">{{ this.Title1[36] }}</option>
        <option value="38">{{ this.Title1[37] }}</option>
        <option value="39">{{ this.Title1[38] }}</option>
        <option value="40">{{ this.Title1[39] }}</option>
        <option value="41">{{ this.Title1[40] }}</option>
        <option value="42">{{ this.Title1[41] }}</option>
        <option value="43">{{ this.Title1[42] }}</option>
        <option value="44">{{ this.Title1[43] }}</option>
        <option value="45">{{ this.Title1[44] }}</option>
        <option value="46">{{ this.Title1[45] }}</option>
        <option value="47">{{ this.Title1[46] }}</option>
        <option value="48">{{ this.Title1[47] }}</option>
        <option value="49">{{ this.Title1[48] }}</option>
        <option value="50">{{ this.Title1[49] }}</option>
        <option value="51">{{ this.Title1[50] }}</option>
        <option value="52">{{ this.Title1[51] }}</option>
        <option value="53">{{ this.Title1[52] }}</option>
        <option value="54">{{ this.Title1[53] }}</option>
        <option value="55">{{ this.Title1[54] }}</option>
        <option value="56">{{ this.Title1[55] }}</option>
    </select>

    <select name="" id="" v-model="this.checked2" @change = "this.createlabel()">
        <option value="">請選擇</option>
        <option value="1">{{ this.Title1[0] }}</option>
        <option value="2">{{ this.Title1[1] }}</option>
        <option value="3">{{ this.Title1[2] }}</option>
        <option value="4">{{ this.Title1[3] }}</option>
        <option value="5">{{ this.Title1[4] }}</option>
        <option value="6">{{ this.Title1[5] }}</option>
        <option value="7">{{ this.Title1[6] }}</option>
        <option value="8">{{ this.Title1[7] }}</option>
        <option value="9">{{ this.Title1[8] }}</option>
        <option value="10">{{ this.Title1[9] }}</option>
        <option value="11">{{ this.Title1[10] }}</option>
        <option value="12">{{ this.Title1[11] }}</option>
        <option value="13">{{ this.Title1[12] }}</option>
        <option value="14">{{ this.Title1[13] }}</option>
        <option value="15">{{ this.Title1[14] }}</option>
        <option value="16">{{ this.Title1[15] }}</option>
        <option value="17">{{ this.Title1[16] }}</option>
        <option value="18">{{ this.Title1[17] }}</option>
        <option value="19">{{ this.Title1[18] }}</option>
        <option value="20">{{ this.Title1[19] }}</option>
        <option value="21">{{ this.Title1[20] }}</option>
        <option value="22">{{ this.Title1[21] }}</option>
        <option value="23">{{ this.Title1[22] }}</option>
        <option value="24">{{ this.Title1[23] }}</option>
        <option value="25">{{ this.Title1[24] }}</option>
        <option value="26">{{ this.Title1[25] }}</option>
        <option value="27">{{ this.Title1[26] }}</option>
        <option value="28">{{ this.Title1[27] }}</option>
        <option value="29">{{ this.Title1[28] }}</option>
        <option value="30">{{ this.Title1[29] }}</option>
        <option value="31">{{ this.Title1[30] }}</option>
        <option value="32">{{ this.Title1[31] }}</option>
        <option value="33">{{ this.Title1[32] }}</option>
        <option value="34">{{ this.Title1[33] }}</option>
        <option value="35">{{ this.Title1[34] }}</option>
        <option value="36">{{ this.Title1[35] }}</option>
        <option value="37">{{ this.Title1[36] }}</option>
        <option value="38">{{ this.Title1[37] }}</option>
        <option value="39">{{ this.Title1[38] }}</option>
        <option value="40">{{ this.Title1[39] }}</option>
        <option value="41">{{ this.Title1[40] }}</option>
        <option value="42">{{ this.Title1[41] }}</option>
        <option value="43">{{ this.Title1[42] }}</option>
        <option value="44">{{ this.Title1[43] }}</option>
        <option value="45">{{ this.Title1[44] }}</option>
        <option value="46">{{ this.Title1[45] }}</option>
        <option value="47">{{ this.Title1[46] }}</option>
        <option value="48">{{ this.Title1[47] }}</option>
        <option value="49">{{ this.Title1[48] }}</option>
        <option value="50">{{ this.Title1[49] }}</option>
        <option value="51">{{ this.Title1[50] }}</option>
        <option value="52">{{ this.Title1[51] }}</option>
        <option value="53">{{ this.Title1[52] }}</option>
        <option value="54">{{ this.Title1[53] }}</option>
        <option value="55">{{ this.Title1[54] }}</option>
        <option value="56">{{ this.Title1[55] }}</option>
    </select>

    <select name="" id="" v-model="this.checked3" @change = "this.createlabel()">
        <option value="">請選擇</option>
        <option value="1">{{ this.Title1[0] }}</option>
        <option value="2">{{ this.Title1[1] }}</option>
        <option value="3">{{ this.Title1[2] }}</option>
        <option value="4">{{ this.Title1[3] }}</option>
        <option value="5">{{ this.Title1[4] }}</option>
        <option value="6">{{ this.Title1[5] }}</option>
        <option value="7">{{ this.Title1[6] }}</option>
        <option value="8">{{ this.Title1[7] }}</option>
        <option value="9">{{ this.Title1[8] }}</option>
        <option value="10">{{ this.Title1[9] }}</option>
        <option value="11">{{ this.Title1[10] }}</option>
        <option value="12">{{ this.Title1[11] }}</option>
        <option value="13">{{ this.Title1[12] }}</option>
        <option value="14">{{ this.Title1[13] }}</option>
        <option value="15">{{ this.Title1[14] }}</option>
        <option value="16">{{ this.Title1[15] }}</option>
        <option value="17">{{ this.Title1[16] }}</option>
        <option value="18">{{ this.Title1[17] }}</option>
        <option value="19">{{ this.Title1[18] }}</option>
        <option value="20">{{ this.Title1[19] }}</option>
        <option value="21">{{ this.Title1[20] }}</option>
        <option value="22">{{ this.Title1[21] }}</option>
        <option value="23">{{ this.Title1[22] }}</option>
        <option value="24">{{ this.Title1[23] }}</option>
        <option value="25">{{ this.Title1[24] }}</option>
        <option value="26">{{ this.Title1[25] }}</option>
        <option value="27">{{ this.Title1[26] }}</option>
        <option value="28">{{ this.Title1[27] }}</option>
        <option value="29">{{ this.Title1[28] }}</option>
        <option value="30">{{ this.Title1[29] }}</option>
        <option value="31">{{ this.Title1[30] }}</option>
        <option value="32">{{ this.Title1[31] }}</option>
        <option value="33">{{ this.Title1[32] }}</option>
        <option value="34">{{ this.Title1[33] }}</option>
        <option value="35">{{ this.Title1[34] }}</option>
        <option value="36">{{ this.Title1[35] }}</option>
        <option value="37">{{ this.Title1[36] }}</option>
        <option value="38">{{ this.Title1[37] }}</option>
        <option value="39">{{ this.Title1[38] }}</option>
        <option value="40">{{ this.Title1[39] }}</option>
        <option value="41">{{ this.Title1[40] }}</option>
        <option value="42">{{ this.Title1[41] }}</option>
        <option value="43">{{ this.Title1[42] }}</option>
        <option value="44">{{ this.Title1[43] }}</option>
        <option value="45">{{ this.Title1[44] }}</option>
        <option value="46">{{ this.Title1[45] }}</option>
        <option value="47">{{ this.Title1[46] }}</option>
        <option value="48">{{ this.Title1[47] }}</option>
        <option value="49">{{ this.Title1[48] }}</option>
        <option value="50">{{ this.Title1[49] }}</option>
        <option value="51">{{ this.Title1[50] }}</option>
        <option value="52">{{ this.Title1[51] }}</option>
        <option value="53">{{ this.Title1[52] }}</option>
        <option value="54">{{ this.Title1[53] }}</option>
        <option value="55">{{ this.Title1[54] }}</option>
        <option value="56">{{ this.Title1[55] }}</option>
    </select>

    <select name="" id="" v-model="this.checked4" @change = "this.createlabel()">
        <option value="">請選擇</option>
        <option value="1">{{ this.Title1[0] }}</option>
        <option value="2">{{ this.Title1[1] }}</option>
        <option value="3">{{ this.Title1[2] }}</option>
        <option value="4">{{ this.Title1[3] }}</option>
        <option value="5">{{ this.Title1[4] }}</option>
        <option value="6">{{ this.Title1[5] }}</option>
        <option value="7">{{ this.Title1[6] }}</option>
        <option value="8">{{ this.Title1[7] }}</option>
        <option value="9">{{ this.Title1[8] }}</option>
        <option value="10">{{ this.Title1[9] }}</option>
        <option value="11">{{ this.Title1[10] }}</option>
        <option value="12">{{ this.Title1[11] }}</option>
        <option value="13">{{ this.Title1[12] }}</option>
        <option value="14">{{ this.Title1[13] }}</option>
        <option value="15">{{ this.Title1[14] }}</option>
        <option value="16">{{ this.Title1[15] }}</option>
        <option value="17">{{ this.Title1[16] }}</option>
        <option value="18">{{ this.Title1[17] }}</option>
        <option value="19">{{ this.Title1[18] }}</option>
        <option value="20">{{ this.Title1[19] }}</option>
        <option value="21">{{ this.Title1[20] }}</option>
        <option value="22">{{ this.Title1[21] }}</option>
        <option value="23">{{ this.Title1[22] }}</option>
        <option value="24">{{ this.Title1[23] }}</option>
        <option value="25">{{ this.Title1[24] }}</option>
        <option value="26">{{ this.Title1[25] }}</option>
        <option value="27">{{ this.Title1[26] }}</option>
        <option value="28">{{ this.Title1[27] }}</option>
        <option value="29">{{ this.Title1[28] }}</option>
        <option value="30">{{ this.Title1[29] }}</option>
        <option value="31">{{ this.Title1[30] }}</option>
        <option value="32">{{ this.Title1[31] }}</option>
        <option value="33">{{ this.Title1[32] }}</option>
        <option value="34">{{ this.Title1[33] }}</option>
        <option value="35">{{ this.Title1[34] }}</option>
        <option value="36">{{ this.Title1[35] }}</option>
        <option value="37">{{ this.Title1[36] }}</option>
        <option value="38">{{ this.Title1[37] }}</option>
        <option value="39">{{ this.Title1[38] }}</option>
        <option value="40">{{ this.Title1[39] }}</option>
        <option value="41">{{ this.Title1[40] }}</option>
        <option value="42">{{ this.Title1[41] }}</option>
        <option value="43">{{ this.Title1[42] }}</option>
        <option value="44">{{ this.Title1[43] }}</option>
        <option value="45">{{ this.Title1[44] }}</option>
        <option value="46">{{ this.Title1[45] }}</option>
        <option value="47">{{ this.Title1[46] }}</option>
        <option value="48">{{ this.Title1[47] }}</option>
        <option value="49">{{ this.Title1[48] }}</option>
        <option value="50">{{ this.Title1[49] }}</option>
        <option value="51">{{ this.Title1[50] }}</option>
        <option value="52">{{ this.Title1[51] }}</option>
        <option value="53">{{ this.Title1[52] }}</option>
        <option value="54">{{ this.Title1[53] }}</option>
        <option value="55">{{ this.Title1[54] }}</option>
        <option value="56">{{ this.Title1[55] }}</option>
    </select>

    <select name="" id="" v-model="this.checked5" @change = "this.createlabel()">
        <option value="">請選擇</option>
        <option value="1">{{ this.Title1[0] }}</option>
        <option value="2">{{ this.Title1[1] }}</option>
        <option value="3">{{ this.Title1[2] }}</option>
        <option value="4">{{ this.Title1[3] }}</option>
        <option value="5">{{ this.Title1[4] }}</option>
        <option value="6">{{ this.Title1[5] }}</option>
        <option value="7">{{ this.Title1[6] }}</option>
        <option value="8">{{ this.Title1[7] }}</option>
        <option value="9">{{ this.Title1[8] }}</option>
        <option value="10">{{ this.Title1[9] }}</option>
        <option value="11">{{ this.Title1[10] }}</option>
        <option value="12">{{ this.Title1[11] }}</option>
        <option value="13">{{ this.Title1[12] }}</option>
        <option value="14">{{ this.Title1[13] }}</option>
        <option value="15">{{ this.Title1[14] }}</option>
        <option value="16">{{ this.Title1[15] }}</option>
        <option value="17">{{ this.Title1[16] }}</option>
        <option value="18">{{ this.Title1[17] }}</option>
        <option value="19">{{ this.Title1[18] }}</option>
        <option value="20">{{ this.Title1[19] }}</option>
        <option value="21">{{ this.Title1[20] }}</option>
        <option value="22">{{ this.Title1[21] }}</option>
        <option value="23">{{ this.Title1[22] }}</option>
        <option value="24">{{ this.Title1[23] }}</option>
        <option value="25">{{ this.Title1[24] }}</option>
        <option value="26">{{ this.Title1[25] }}</option>
        <option value="27">{{ this.Title1[26] }}</option>
        <option value="28">{{ this.Title1[27] }}</option>
        <option value="29">{{ this.Title1[28] }}</option>
        <option value="30">{{ this.Title1[29] }}</option>
        <option value="31">{{ this.Title1[30] }}</option>
        <option value="32">{{ this.Title1[31] }}</option>
        <option value="33">{{ this.Title1[32] }}</option>
        <option value="34">{{ this.Title1[33] }}</option>
        <option value="35">{{ this.Title1[34] }}</option>
        <option value="36">{{ this.Title1[35] }}</option>
        <option value="37">{{ this.Title1[36] }}</option>
        <option value="38">{{ this.Title1[37] }}</option>
        <option value="39">{{ this.Title1[38] }}</option>
        <option value="40">{{ this.Title1[39] }}</option>
        <option value="41">{{ this.Title1[40] }}</option>
        <option value="42">{{ this.Title1[41] }}</option>
        <option value="43">{{ this.Title1[42] }}</option>
        <option value="44">{{ this.Title1[43] }}</option>
        <option value="45">{{ this.Title1[44] }}</option>
        <option value="46">{{ this.Title1[45] }}</option>
        <option value="47">{{ this.Title1[46] }}</option>
        <option value="48">{{ this.Title1[47] }}</option>
        <option value="49">{{ this.Title1[48] }}</option>
        <option value="50">{{ this.Title1[49] }}</option>
        <option value="51">{{ this.Title1[50] }}</option>
        <option value="52">{{ this.Title1[51] }}</option>
        <option value="53">{{ this.Title1[52] }}</option>
        <option value="54">{{ this.Title1[53] }}</option>
        <option value="55">{{ this.Title1[54] }}</option>
        <option value="56">{{ this.Title1[55] }}</option>
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