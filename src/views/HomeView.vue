<template>
    <main>
      <showcase/>
      <div class="container">
        <div class="menu-store">
        <menus :menuItems="store.groups"/>
        </div>>
        <div class="category">
        <category
          v-for="(category, index) in categories"
          :key="index"
          :name="category.name"
          :productCount="category.productCount"
          :image="category.image"  
          :backgroundColor="category.color"
        />
      </div>
      <div class="promotion">
        <promotion
          v-for="(promotion, index) in promotions"
          :key="index"
          :title="promotion.title"
          :image="promotion.image"
          :buttonText="'Shop Now'"
          :backgroundColor="promotion.color"
          :buttonColor="promotion.buttonColor"
        />
      </div>
      <menus :menuItems="store.groups"/>
      <div class="product-store">
      <product/>
  </div>
      </div>
    </main>
    
  </template>
  
  <script>
  
  import Category from '@/components/category.vue';
  import product from '@/components/product.vue';
  import menus from '@/components/menu_type.vue';
  import { useProductStore } from '@/stores/productStore';
  import { mapState } from 'pinia';
  import Promotion from '@/components/promotion.vue';
  import Showcase from '@/components/showcase.vue';
  
  
  export default {
    name: 'App',
    components: {
      Category,
      Promotion,
      menus,
      product,
      Showcase
    },
    setup() {
      const store = useProductStore();
      return {
        store
      };
    },
    async mounted() {
      await this.store.fetchCategories();
      await this.store.fetchPromotions();
      await this.store.fetchProducts();
      await this.store.fetchGroups();
      },
      computed:{
      ...mapState(useProductStore, {
      categories: 'categories',
      promotions: 'promotions',
      products: 'products',  
      groups: 'groups',
      showcase:'showcase',
  }),
      }
  };
  </script>
  <style scoped>
  main {
    margin: 0 auto; 
    justify-content: center; 
    background-color: rgb(255, 255, 255);
  }
  .container{
    flex-direction: column;
  }
  .category {
    display: flex;
  }
  .promotion {
    display: flex;
     
    gap: 20px;
  }
  </style>