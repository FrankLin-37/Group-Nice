<script>
import salChart from '../components/SalaryChart.vue'

export default{
    components: {
        salChart,
    }
}

</script>

<template>
    <div class="firstArea">
        <salChart />
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