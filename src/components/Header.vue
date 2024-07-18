<script>
import { RouterLink} from 'vue-router'
export default{
    components:{
        RouterLink
    }
}
</script>

<template>
        <div class="headerArea">
    <RouterLink class="routeItem" to="/">首頁</RouterLink>
    <RouterLink class="routeItem" to="/Salary">薪資中位數</RouterLink>
    <RouterLink class="routeItem" to="/Case">案例</RouterLink>
    <RouterLink class="routeItem" to="/TaiwanMap">七都房價中位數</RouterLink>
    <RouterLink class="routeItem" to="/Donate">贊助我們</RouterLink>

</div>
</template>

<style scoped lang="scss">

.headerArea{    
    width: 100%;
    height: 9dvh;
    display: flex;
    align-items: center;
    font-size: 21px;
    background-color: #8A8675;
    transition: 0.5s;
    position: fixed;
    z-index: 1;
    .routeItem{
        font-size: 24px;
        padding-left: 8%;
        color: aliceblue;
    }
}
</style>