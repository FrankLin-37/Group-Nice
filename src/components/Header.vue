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
    <RouterLink class="routeItem" to="/Two">Two</RouterLink>
    <RouterLink class="routeItem" to="/Three">贊助我們</RouterLink>
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