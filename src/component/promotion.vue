<template>
    <div class="Promot" :style="{backgroundColor: bgColorSecond}" >
        <img :src="bgImage" alt="">
        <h2>{{ TittlePromotion }}</h2>
        <h3>{{ massage }}</h3>
        <Button :buttonText="'shop now'" @click="shopnow"/>

        
    </div>
</template>
<script>
import Button from './Button.vue';
export default {
    name: "promotion",
    components:{
        Button,
    },
    props:{
        bgImage:String,
        bgColorSecond:String,
        TittlePromotion:String,
    },
    methods: {
        shopnow(promotion){
            alert("Let's shop:" +this.TittlePromotion);
        }
    },
    promotions: [
         {
             title: "Everyday Fresh and Clean with Our Products",
             color: "#F0E9D7",
             image: "../image/background1.jpg",
             buttonColor: "#42B678",
             url: "/promotions/1",
         },
         {
             title: "Make your Breakfast Healthy and Easy",
             color: "#F2E8E9",
             image: "../image/background2.png",
             buttonColor: "#42B678",
             url: "/promotions/2",
         },
         {
             title: "The best Organic Products Online",
             color: "#E6EAF3",
             image: "../image/background3.jpg",
             buttonColor: "#FBC040",
             url: "/promotions/3",
         }
      ]
}
</script>
<style >
.Promot{
    width: 23.5rem;
    height: 16rem;
    background-color: rgb(42, 234, 77);
    margin-top: 2rem;
    border-radius: 20px;
    position: relative;

}
.Promot img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    right: 0px;
}
.Promot h2{
    color: black;
    position: absolute;
    top: 15%;
    left: 10%;
    width: 50%;
    font-size: 18px;
}
</style>