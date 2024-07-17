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

    <RouterLink class="routeItem" to="/">One</RouterLink>
    <RouterLink class="routeItem" to="/Salary">薪資中位數</RouterLink>
    <RouterLink class="routeItem" to="/Case">案例</RouterLink>
    <RouterLink class="routeItem" to="/Donate">贊助我們</RouterLink>
    <RouterLink class="routeItem" to="/TaiwanMap">Map</RouterLink>

</div>
    
</template>

<style scoped lang="scss">
.headerArea{
    width: 100%;
    height: 100%;
    border: 1.5px solid black;
}
</style>