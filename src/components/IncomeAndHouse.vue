<script >
import salData1 from '../assets/111 sal total.json'
import salTitle1 from '../assets/111 saljsti.json'
import houseData from '../assets/sevenCityPrice/price.json'

export default{
    data(){ // data:function ()
        return{
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
            houseDataSet:[
                [],
                [],
                [],
                [],
                [],
                [],
                [],
            ],
            Title1: [],
            salChecked:0,
            yearChecked:0,

            yearset: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028','2029', '2030'],
            income:0,
            housePrice:0,
            needYear:0,
            firstChoose:0,
            locationChecked:0,
            final:"",
            finalYear:0,
            case1:0,
            case2:0,
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

        var y = 0;
        houseData.forEach(element => {
            element.forEach(element2 => {
                this.houseDataSet[y].push(Math.round(element2 / 10000));
            });
            y++;
        });
    },

    components:{
        
    },

    // 自訂方法格式:
    methods:{
        getresult(){
            this.housePrice = this.houseDataSet[this.locationChecked-1][this.yearChecked-1]

            this.income = this.salDataSet1[this.salChecked-1][this.yearChecked-1];

            this.needYear = Math.ceil(this.housePrice / this.income);

            if(!this.housePrice){
                this.housePrice = ""
            }

            if(!this.needYear){
                this.needYear = ""
            }

            if(!this.income){
                this.income = ""
            }

            if(this.needYear >=50){
                this.final = "不可能辦到吧！"
                this.finalYear = 1
            }else if(this.needYear <=5){
                this.final = "你是天選之人吧！"
                this.finalYear = 2
            }else if(this.needYear <=10){
                this.final = "10年以內也太扯！"
                this.finalYear = 3
            }else if(this.needYear <20){
                this.final = "不到20年太強了吧！"
                this.finalYear = 4
            }else if(this.needYear <=30){
                this.final = "再30年一定能搞定！"
                this.finalYear = 5
            }else if(this.needYear <=40){
                this.final = "該考慮轉職了啦！"
                this.finalYear = 6
            }else if(this.needYear <50){
                this.final = "這一定要轉職吧！"
                this.finalYear = 7
            }
        },
    },
}
</script>

<template>

    <div class="main">
        <div class="area smallOne">
        <div class="block">
    <select name="" id="" v-model="this.yearChecked" @change = "this.getresult()">
        <option value="0">年份</option>
        <option :value="item" v-for="item in yearset.length">{{ this.yearset[item-1] }}</option>
<!-- 
        <option value="1">{{ this.yearset[0] }}</option>
        <option value="2">{{ this.yearset[1] }}</option>
        <option value="3">{{ this.yearset[2] }}</option>
        <option value="4">{{ this.yearset[3] }}</option>
        <option value="5">{{ this.yearset[4] }}</option>
        <option value="6">{{ this.yearset[5] }}</option>
        <option value="7">{{ this.yearset[6] }}</option>
        <option value="8">{{ this.yearset[7] }}</option>
        <option value="9">{{ this.yearset[8] }}</option>
        <option value="10">{{ this.yearset[9] }}</option>
        <option value="11">{{ this.yearset[10] }}</option>
        <option value="12">{{ this.yearset[11] }}</option>
        <option value="13">{{ this.yearset[12] }}</option>
        <option value="14">{{ this.yearset[13] }}</option>
        <option value="15">{{ this.yearset[14] }}</option>
        <option value="16">{{ this.yearset[15] }}</option>
        <option value="17">{{ this.yearset[16] }}</option>
        <option value="18">{{ this.yearset[17] }}</option> -->
    </select>
        </div>
        <div class="block">
            <!-- <h1>{{ this.locationChecked }}</h1> -->
            <select name="" id="" v-model="this.locationChecked" @change = "this.getresult()">
            <option value="0">地區</option>
            <option value="1">台北</option>
            <option value="2">新北</option>
            <option value="3">桃園</option>
            <option value="4">新竹</option>
            <option value="5">台中</option>
            <option value="6">台南</option>
            <option value="7">高雄</option>
            </select>
        </div>
        <div class="block">
            <select name="firstchoose" id="" v-model="firstChoose">
            <option value="0">類別</option>
            <option value="1" >性別</option>
            <option value="2" >年齡別</option>
            <option value="3" >教育程度別</option>
            <option value="4" >年齡及教育程度別</option>
            <option value="5" >產業別</option>
            </select>
            
    <select name="gender" id="" v-model="this.salChecked" @change = "this.getresult()" v-if="this.firstChoose ==1">
        <option value="0">性別</option>
        <option value="1">{{ this.Title1[0] }}</option>
        <option value="2">{{ this.Title1[1] }}</option>
    </select>
    <select name="age" id="" v-model="this.salChecked" @change = "this.getresult()" v-if="this.firstChoose ==2">
        <option value="0">年齡別</option>
        <option value="3">{{ this.Title1[2] }}</option>
        <option value="4">{{ this.Title1[3] }}</option>
        <option value="5">{{ this.Title1[4] }}</option>
        <option value="6">{{ this.Title1[5] }}</option>
        <option value="7">{{ this.Title1[6] }}</option>
        <option value="8">{{ this.Title1[7] }}</option>
    </select>
    <select name="education" id="" v-model="this.salChecked" @change = "this.getresult()" v-if="this.firstChoose ==3">
        <option value="0">教育程度別</option>
        <option value="9">{{ this.Title1[8] }}</option>
        <option value="10">{{ this.Title1[9] }}</option>
        <option value="11">{{ this.Title1[10] }}</option>
        <option value="12">{{ this.Title1[11] }}</option>
    </select>
    <select name="ageedu" id="" v-model="this.salChecked" @change = "this.getresult()" v-if="this.firstChoose ==4">
        <option value="0">年齡及教育程度別</option>
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
    </select>
    <select name="industry" id="" v-model="this.salChecked" @change = "this.getresult()" v-if="this.firstChoose ==5">
        <option value="0">產業別</option>
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

        </div>
        </div>

        <div class="area area1">
            <p>房價：</p>
            <h1>{{ this.housePrice }}</h1>

            <p>　薪資：</p>
            <h1>{{ this.income }}</h1>
            <p>萬　</p>

            <p>需要：</p>
            <h1>{{ this.needYear }}</h1>
            <p>年</p>

        </div>

        <div class="area area2">
            <div class="imageArea" v-if="this.needYear">
                <img src="../assets/60over.png" alt="" id="" v-if="this.finalYear == 1" >
                <img src="../assets/5over.png"  alt="" id="" v-if="this.finalYear == 2">
                <img src="../assets/10over.png" alt="" id="" v-if="this.finalYear == 3">
                <img src="../assets/20over.png" alt="" id="" v-if="this.finalYear == 4">
                <img src="../assets/30over.png" alt="" id="" v-if="this.finalYear == 5">
                <img src="../assets/40over.png" alt="" id="" v-if="this.finalYear == 6">
                <img src="../assets/50over.png" alt="" id="" v-if="this.finalYear == 7">
            </div>
            <div class="textArea">
                <h2>{{ this.final }}</h2>
            </div>
        </div>

        <div class="caseArea">
            <div class="casefirst" @click="this.case1 = 1">
                <button class="case1btn">案例1</button>
                <div class="caseinner1">
                    <img src="../assets/neetstage.png" alt="" v-if="this.case1 == 0">
                    <div class="caseText"> 
                        <p v-if="this.case1 == 0">王小明（Before）</p>
                        <p v-if="this.case1 == 0">29歲（2015）</p>
                        <p v-if="this.case1 == 0">高中畢業</p>
                        <p v-if="this.case1 == 0">台南市</p>
                    </div>
                    <div class="caseText">
                        <p v-if="this.case1 == 1">王小明（After）</p>
                        <p v-if="this.case1 == 1">35歲（2023）</p>
                        <p v-if="this.case1 == 1">研究所畢業</p>
                        <p v-if="this.case1 == 1">台北市</p>
                    </div>
                    <img src="../assets/ishikistage.png" alt="" v-if="this.case1 == 1">
                </div>
            </div>
            <div class="casesec" @click="this.case2 = 1">
                <button class="case2btn">案例2</button>
                <div class="caseinner2">
                    <img src="../assets/mitsuha17.jpg" alt="" v-if="this.case2 == 0">
                    <div class="caseText"> 
                        <p v-if="this.case2 == 0">Mitsuha（Before）</p>
                        <p v-if="this.case2 == 0">17歲（2013）</p>
                        <p v-if="this.case2 == 0">新竹市</p>
                        <p v-if="this.case2 == 0">醫療保健及社會工作服務業</p>
                        <p v-if="this.case2 == 0">宗教助理專業人員</p>
                    </div>
                    <div class="caseText">
                        <p v-if="this.case2 == 1">Mitsuha（After）</p>
                        <p v-if="this.case2 == 1">25歲（2021）</p>
                        <p v-if="this.case2 == 1">台北市</p>
                        <p v-if="this.case2 == 1">專業科學及技術服務業</p>
                        <p v-if="this.case2 == 1">服飾設計師</p>
                    </div>
                    <img src="../assets/mitsuha25.jpg" alt="" v-if="this.case2 == 1">
                </div>
            </div>
        </div>
    
    </div>

</template>

<style scoped lang="scss">

    * {
    color: #728D9A;
    background: #F1EFE5;
    font-family: "Zen Old Mincho", serif;
    }

    .main{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: start;
    }
    
    .casefirst{
        position: fixed;
        right: 10%;

        .case1btn{
            width: 26px;
            height: 80px;
            position: fixed;
            right: 5%;
            top: 20%;
        }

        .caseinner1{
            display: none;
        }

        &:hover{
            .caseinner1{
                background-color: rgb(250, 237, 205);
                display: block;
                width: 70dvw;
                height: 65dvh;
                position: fixed;
                left: 15%;
                top: 20%;
                border-radius: 5%;

                img{
                    background: none;
                    width: 40dvw;
                    height: 65dvh;
                    position: fixed;
                    left: 43%;
                    top: 20%;
                }

                .caseText{

                    p{
                        background: none;
                        color: black;
                    }

                    background: none;
                    width: 50dvw;
                    height: 50dvh;
                    position: fixed;
                    left: 16.5%;
                    top: 25%;
                }
            }
        }
    }
    
    .casesec{
        position: fixed;
        right: 10%;

        .case2btn{
            width: 26px;
            height: 80px;
            position: fixed;
            right: 5%;
            top: 32%;
        }

        .caseinner2{
            display: none;
        }

        &:hover{
            .caseinner2{
                background-color: rgb(250, 237, 205);
                display: block;
                width: 70dvw;
                height: 65dvh;
                position: fixed;
                left: 15%;
                top: 20%;
                border-radius: 5%;

                img{
                    background: none;
                    width: 27dvw;
                    height: 65dvh;
                    position: fixed;
                    left: 50%;
                    top: 20%;
                }

                .caseText{

                    p{
                        background: none;
                        color: black;
                    }

                    background: none;
                    width: 50dvw;
                    height: 50dvh;
                    position: fixed;
                    left: 16.5%;
                    top: 25%;
                }
            }
        }
    }

    .area{
        width: 70dvw;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;

        .block{
            width: 33%;
        }

        select{
            margin: 1%;
        }

        .imgArea{
            display: flex;
            flex-wrap: wrap;
        }

        .textArea{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
        }
    }
    
    img{
        position: absolute;
        left: 6%;
        top: 40%;
    }

    .smallOne{
        height: 15%;
    }

    .area1{
        height: 20%;
    }

    p{
        font-size: 40px;
        margin-top: 2.7%;
    }

    h1{
        font-size: 80px;
    }

    h2{
        font-size: 80px;
    }

</style>
