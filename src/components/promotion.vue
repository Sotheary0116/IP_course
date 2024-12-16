<template>
  <div class="packet" :style="{ backgroundColor: backgroundColor }">
    <div class="des1">
      <p>{{ title }}</p>
      <ButtonCom
        :buttonText="buttonText"
        :backgroundColor="buttonColor"
        @click="shopNow()"
      />
    </div>
    <img :src="image" class="image" />
  </div>
</template>

<script setup>
import ButtonCom from './buttons.vue';

const props = defineProps({
  title: String,  
  image: String,  
  buttonText: String,  
  backgroundColor: String,  
  buttonColor: String,  
});

function shopNow() {
  alert("Let's shop: " + props.title);
}
</script>
<style scoped>
.packet { 
  height: 300px;
  width: 440px;
  border-radius: 20px;
  margin-left: 10px;
  display: flex;
  margin-top: 10px;
  align-items: center;  
}

.des1 {
   
  padding: 20px;
}

p {   
  font-size: 1.2em;  
  font-weight: bold;  
  color: black;
  font-family: Arial, Helvetica, sans-serif;
   
}

.image {
  width: auto;  
  height: 65%;
  margin-top: 10px; 
  margin-left: auto;  
}
</style>
