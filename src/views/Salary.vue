<script>
import salChart from '../components/SalaryChart.vue'

export default{
    components: {
        salChart,
    }
}

</script>

<template>
    <div class="space"></div>
    <div class="space2"></div>
    <div class="firstArea">
        <salChart />
    </div>
</template>

<style scoped lang="scss">


* {
    color: #728D9A;
    background: #F1EFE5;
}

.space{
    width: 100%;
    height: 9dvh;
}

.space2{
    width: 100%;
    height: 6dvh;
}

.firstArea{
    width: 100%;
    height: 100dvh;
    display: flex;


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