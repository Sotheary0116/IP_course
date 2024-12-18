import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [], 
    categories: [], 
    products: [],
    Showcase:[],
    loading:false,
  }),
  getters: {
    getCategoriesByGroup: (state) => {
      return (groupName) => state.categories.filter((category) => category.groupName === groupName);
    },
    getProductsByGroup: (state) => {
      return (groupName) => state.products.filter((product) => product.groupName === groupName);
    },
    getProductsByCategory: (state) => {
      return (categoryId) => state.products.filter((product) => product.categoryId === categoryId);
    },
    getPopularProducts: (state) => {
      return state.products.filter((product) => product.countSold > 10);
    },
  },
  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        console.log('Categories fetched:', response.data);  
        this.categories = response.data;  
      } catch (error) {
        console.error('Error fetching categories:', error.response?.data || error.message);
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        console.log('Promotions fetched:', response.data);  
        this.promotions = response.data;  
      } catch (error) {
        console.error('Error fetching promotions:', error.response?.data || error.message);
      }
    },
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        console.log('Products fetched:', response.data);  
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message);
      } finally {
        this.loading = false;
      }
    },    
    async fetchGroups() {
      try {
        const response = await axios.get('http://localhost:3000/api/groups');
        console.log('Groups product fetched:', response.data);  
        this.groups = response.data;
      } catch (error) {
        console.error('Error fetching groups: product', error.response?.data || error.message);
      }
    }
  },
});
