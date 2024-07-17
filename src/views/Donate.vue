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
        <img src="../assets/pay-nobg.png" alt="Qcode">
    </div>

</template>

<style scoped lang="scss">
    *{
    color: #728D9A;
    background: #F1EFE5;
    // font-family: "Zen Old Mincho", serif;
    // font-family: "Shippori Mincho", serif;
    font-family: "Kiwi Maru", serif;
    
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
        
        h1{
            margin-left: 3.5%;
        }
    }
</style>