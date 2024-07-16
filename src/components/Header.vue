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
        <div class="inheadertext">
    <RouterLink class="routeItem" to="/">One</RouterLink>
    <RouterLink class="routeItem" to="/Two">Two</RouterLink>
    <RouterLink class="routeItem" to="/Three"><i class="fa-solid fa-triangle-exclamation"></i></RouterLink>
</div>
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
    opacity: 0.8;
    .inheadertext{    
    width: 100%;
    height: 9dvh;
    display: flex;
    align-items: center;
    font-size: 21px;
    background-color: transparent;
    transition: 0.5s;
    a{
        color:white;
        margin-left: 8%;
        font-weight: bolder;
        
    }
    i{
        color: rgb(139, 5, 5);
        font-size: 30px;
        }
    }
}
</style>