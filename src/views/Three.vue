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
    <div class="main">
        <h1>如果喜歡請贊助我們</h1>
        <img src="../assets/pay-nobg.png" alt="Qcode">
    </div>

</template>

<style scoped lang="scss">
    .main{
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        
    }
</style>