<template>
  <div class="container" :style="{ backgroundColor: backgroundColor }">
      <img :src="image" class="image" />
      <span class="name">{{ name }}</span>
      <span class="amount">{{ productCount }} products</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,  
  productCount: Number, 
  image: String,  
  backgroundColor: String,  
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  border: 1px solid rgb(109, 255, 69);
  width: 120px; 
  height: 180px;  
  border-radius: 10px;
  color: black;
  text-align: center;
  margin: 10px; 
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);  
}

.name {
  font-weight: bold;
  font-size: small;
  margin-top: 5px;
}

.amount {
  font-weight: lighter;
  font-size: x-small;
}

.image {
  width: 70%;
  height: auto;
  object-fit: contain;
  margin-top: 10px;
}
</style>
