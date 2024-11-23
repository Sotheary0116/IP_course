import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const useProductStore = defineStore("product", {
 
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),
  getters: {
    getCategoriesByGroup: (state) => {
      return (groupName) =>
        state.categories.filter((category) => category.group === groupName);
    },
    getPromotionsByGroup: (state) => {
      return (groupName) =>
        state.promotions.filter((promotion) => promotion.group === groupName);
    },
    getProductsByGroup: (state) => {
      return (groupName) =>
        state.products.filter((product) => product.group === groupName);
    },
  },
  actions: {
    fetchCategoried() {
      axios.get("http://localhost:3000/api/categories").then((result) => {
        console.log(result.data);
        // this.categories = result.data;
      });
    },
    fetchPromotions() {
      axios.get("http://localhost:3000/api/promotions").then((result) => {
        console.log(result.data);
        // this.promotions = result.data;
      });
    },
    fetchGroups() {
      axios.get("http://localhost:3000/api/groups").then((result) => {
        console.log(result.data);
        // this.groups = result.data;
      });
    },
    fetchProducts() {
      axios.get("http://localhost:3000/api/products").then((result) => {
        console.log(result.data);
        // this.products = result.data;
      });
    },
  },
});
