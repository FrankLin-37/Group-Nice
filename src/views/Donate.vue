<script>
import location from '../stores/location';
import { mapActions } from 'pinia';
export default{
    methods:{
        ...mapActions(location,["setPages"])
    },
    mounted(){
        this.setPages(6)
    },
}
</script>

<template>
    <div class="space"></div>
    <div class="main">
        <h1>如果喜歡請贊助我們</h1>
        <img src="../assets/pay-nobg.png" alt="Qcode" class="QR">
        <img src="../assets/peko/乳牛走路.gif" alt="乳牛走路" class="cow">

    </div>

</template>

<style scoped lang="scss">
    *{
    color: #728D9A;
    background: #F1EFE5;
    // font-family: "Zen Old Mincho", serif;
    // font-family: "Shippori Mincho", serif;
    // font-family: "Kiwi Maru", serif;
    font-family: "Zen Old Mincho", serif;
    }
    
    .space{
    width: 100%;
    height: 9dvh;
    }
    .main{
        width: 100dvw;
        height: 91dvh;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        .cow{
            padding-left: 50px;
        }
        
        h1{
            margin-left: 0.5%;
            font-size: 3.5rem;
        }

        .QR{
            margin-right: 3%;
        }

        .cow{
            width: 50dvw;
            height: 80dvh;
        }
    }
</style>