import { defineStore } from 'pinia';

export default defineStore('location',{
    state(){
        return{
            location:1,
        }
    },
    getters:{
        pageLocation(){
            return `現在位置:第 ${this.location} 頁`
        }
    },
    actions:{
        setPages(param){
            this.location = param
        }
    }
})