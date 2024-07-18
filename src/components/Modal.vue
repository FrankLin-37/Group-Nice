<script>
</script>


<template>
    <div class="slotArea">
        <div class="show">
            <slot></slot>
            <button type="button" @click="$emit('alertModal')">Close

            </button>
        </div>
        <div class="bg"></div>

    </div>
</template>

<style scoped lang="scss">
.slotArea{
    width: 100%;
    height: 110dvh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 1;
    .show{
        width: 50%;
        height: 50%;
        background-color: white;
        z-index: 3;
    }
    .bg{
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgb(0,0,0,0.3);
        backdrop-filter: blur(5px);
        top: 0;
        left: 0;
        z-index: 0;
    }
}
</style>