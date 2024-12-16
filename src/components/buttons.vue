<template>
  <div class="wrap" :style="{ backgroundColor: backgroundColor }">
    <p>{{ buttonText }}</p>
    <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon" />
  </div>
</template>

<script setup>
const props = defineProps({
  buttonText: String,
  backgroundColor: String,
});

</script>

<style scoped>
.wrap {
  display: flex;
  align-items: center;  
  height: 30px;
  width: 120px;
  padding: 10px;
  border-radius: 5px;
  
}

.icon {
  margin-left: 10px;
  color: whitesmoke;
}

p {
  color: whitesmoke;
  margin: 0;  
}
</style>
