<script>
import housePrice from '../components/housePriceComponent.vue'
import Modal from '../components/Modal.vue'
export default{
    data(){
        return{
            contralModal:false,
            trigger:true,
        }
    },

    methods:{
        showModal(){
            this.contralModal= !this.contralModal
        },
        triggerTimeout() {
            setTimeout(() => {
                this.print();
             }, 3000);
            },
        print() {
            console.log("觸發!!!!!!!!!!");
            this.trigger = false
            }
    },

    components: {
        housePrice,
        Modal
    },

    mounted(){
        this.triggerTimeout()
        this.showModal()
    }
}
</script>


<template>
    <housePrice />
    
    <Modal v-show="this.contralModal" @alertModal="this.showModal()" v-if="this.trigger">
        <img src="../assets/peko/pekoGif.gif" alt="">
    </Modal>
</template>

<style scoped lang="scss">
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

img{
    width: 100dvw;
    height: 100dvh;
    position: absolute;
    left: 0;
    top: 0;
}
</style>