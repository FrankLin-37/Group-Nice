<script>
import incomecheck from '../components/IncomeAndHouse.vue'

export default{
    components: {
        incomecheck,
    }
}

</script>

<template>
    <div class="space"></div>
    <div class="firstArea">
        <incomecheck />
    </div>

</template>

<style scoped lang="scss">



.space{
    width: 100%;
    height: 9dvh;
}

.firstArea{
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

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