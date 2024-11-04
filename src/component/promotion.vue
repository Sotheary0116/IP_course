<template>
    <div class="Promot" :style="{backgroundColor: bgColorSecond}" >
        <img :src="bgImage" alt="">
        <h2>{{ TittlePromotion }}</h2>
        <h3>{{ massage }}</h3>
        <Button :buttonText="'show now'"/>
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
    }
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