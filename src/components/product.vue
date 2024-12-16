<template>
  <div class="product-list">
    <div v-if="loading" class="loading">Loading products...</div>
    <div v-else class="product-grid">
      <div v-for="product in products" :key="product.name" class="product-card">
        <div class="product-label" v-if="product.promotionAsPercentage > 0">
          {{ product.promotionAsPercentage }}% Off
        </div>
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-info"> 
          <p class="brand">Hodo Foods</p>
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-rating">⭐⭐⭐⭐ ({{ product.rating }}/5)</p>
          <p class="product-size">Size: {{ product.size }}</p>
          <div class="price-section">
            <span class="original-price">$ {{ product.price }}</span>
            <span class="discounted-price">
              ${{ (product.price * (1 - product.promotionAsPercentage / 100)).toFixed(2) }}
            </span>
          </div>

          <div v-if="product.quantityEnabled" class="quantity-section">
            <button @click="decreaseQuantity(product)" :disabled="product.quantity <= 0">-</button>
            <span>{{ product.quantity }}</span>
            <button @click="increaseQuantity(product)">+</button>
            <p>Total Price: ${{ (product.quantity * (product.price * (1 - product.promotionAsPercentage / 100))).toFixed(2) }}</p>
          </div>

          <button class="add-to-cart" @click="toggleQuantity(product)">
            {{ product.quantityEnabled ? 'Update Cart' : 'Add to Cart' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useProductStore } from "@/stores/productStore";

export default {
  name: "ProductList",
  computed: {
    ...mapState(useProductStore, {
      products: "products",
    }),
  },
  methods: {
     
    toggleQuantity(product) {
      if (!product.quantityEnabled) {
        product.quantityEnabled = true;
        product.quantity = 1;  
      } else {
        product.quantityEnabled = false;
        product.quantity = 0;  
      }
    },
  
    increaseQuantity(product) {
      if(product.quantity<=product.instock){
        product.quantity++;
      }
      else{
        alert("Product is out of stock!");
      }
      
    }, 
    decreaseQuantity(product) {
      if (product.quantity > 0) product.quantity--;
    },
  },
};
</script>
<style scoped>
.product-list {
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
}

h2 {
  text-align: left;
  margin-bottom: 20px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  flex: 0 1 calc(20% - 20px); /* 5 cards per row */
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 15px;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}
.product-label {
  background-color: #ff5252;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
}

.product-image {
  width: 100%;  
  height: 200px;  
  object-fit: cover;  
  margin-bottom: 15px;
}

.product-info {
  font-family: Arial, sans-serif;
  color: #333;
}

.brand {
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-rating {
  font-size: 14px;
  color: #fbc02d;
  margin-bottom: 10px;
}

.product-size {
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
}

.price-section {
  margin-bottom: 15px;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
}

.discounted-price {
  font-size: 16px;
  font-weight: bold;
  color: #388e3c;
}

.quantity-section {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.quantity-section button {
  font-size: 18px;
  padding: 5px 10px;
  border: none;
  background-color: #388e3c;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quantity-section button:disabled {
  background-color: #ccc;
}

.add-to-cart {
  background-color: #388e3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #2e7d32;
}

.loading {
  font-size: 18px;
  color: #999;
  text-align: center;
  margin-top: 50px;
}
</style>
