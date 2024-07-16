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
<div class="firstArea">
    <div class="firstInput"></div>
    <div class="textArea"></div>
</div>
<div class="secondArea">
    <div class="firstInput"></div>
    <div class="textArea"></div>
</div>
<div class="threeArea">
    <div class="firstInput"></div>
    <div class="textArea"></div>
</div>
</template>

<style scoped lang="scss">

.firstArea{
    width: 100%;
    height: 100dvh;
    border: 1.5px solid black;
    .firstInput{
        width: 100%;
        height: 20dvh;
        border: 1.5px solid black;
    }
    .testArea{
        width: 100%;
        height: 80dvh;
        border: 1.5px solid black;
    }
}
.secondArea{
    width: 100%;
    height: 100dvh;
    border: 1.5px solid black;
    .firstInput{
        width: 100%;
        height: 20dvh;
        border: 1.5px solid black;
    }
    .testArea{
        width: 100%;
        height: 80dvh;
        border: 1.5px solid black;
    }
    
}
.threeArea{
    width: 100%;
    height: 100dvh;
    border: 1.5px solid black;
    .firstInput{
        width: 100%;
        height: 20dvh;
        border: 1.5px solid black;
    }
    .testArea{
        width: 100%;
        height: 80dvh;
        border: 1.5px solid black;
    }
}
</style>