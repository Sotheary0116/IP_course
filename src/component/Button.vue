<template>
    <button class="button">
        {{ buttonText }} <i class="bi bi-arrow-right"></i>
    </button>
</template>
<script>
export default {
    name: "Button",
    props: {
        buttonText: {
            type:String,
            Required:true,
        },
    },
}
</script>
<style scoped>
.button{
    width: 80px;
    height: 30px;
    background-color: green;
    font-size: 13px;
    color: white;
    margin-top: 45%;
    position: absolute;
    border: none;
    margin-left: 5%;
    border-radius: 10px;
}
.button:hover{
    background-color: yellow;
}
</style>