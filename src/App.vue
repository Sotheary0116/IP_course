<template>
  <div class="container">
    <div class="row1">

     <category v-for="(products, index) in categories"
      :key="index"
      :image="products.image"
      :name="products.name"
      :productCount="products.productCount"
      :color="products.color"
      />

    </div>
      
    <div class="row2">
      <promotion v-for="(promotion,second) in promotions"
      :key="second"
      :image="promotion.image"
      :color="promotion.color"
      :tittle="promotion.tittle"
      :buttoncolor="promotion.buttoncolor"
     
      />
    </div>
  </div>
</template>
<script >
import axios from 'axios';
import Category from './component/category.vue';
import promotion  from './component/promotion.vue';
export default{
  name: 'App',
  components:{
    Category,
    promotion,
  },
  data(){
    return{
      categories:[
        {image:"/public/image/orange.png", name:"Orange", productCount:63+"productCount",color:'#efd7ab'},
        {image:'/public/image/avokado.png', name:"green avokado", productCount:63+"productCount",color:'#aed3ba'},
        {image:'/public/image/buger.png', name:"brack", productCount:63+"productCount",color:'#f2ebc2'},
        {image:'/public/image/kiwi.png', name:"Oganic kiwi", productCount:63+"productCount",color:'#defcdf'},
        {image:'/public/image/sack.png', name:"cake", productCount:63+"productCount",color:'#defcf7'},
        {image:'/public/image/snac.png', name:"snack", productCount:63+"productCount",color:'#f4fcde'},
        {image:'/public/image/alpha.png', name:"Peach", productCount:63+"productCount",color:'#fcecde'},
        {image:'/public/image/vegatable.png', name:"Vegetable", productCount:63+"productCount",color:'#defcec'},
        {image:'/public/image/strawberry.png', name:"red straeberry", productCount:63+"productCount",color:'#fce2de'},
        {image:'/public/image/apple.png', name:"red apple", productCount:63+"productCount",color:'#fac9c1'},

      ],
      promotions:[
        {image:'/public/image/background1.jpg',color:'#F0E8D5',tittle:"Everyday Fresh & Clean with our Products"},
        {image:'/public/image/background2.png',color:'#FDE0FF',tittle:"Make you Breakfast Healthy and Easy"},
        {image:'/public/image/background3.jpg',color:'#E2EDEC',tittle:"The best Organic Products Online"},
      ]

    };
  },
  mounted(){
    this.fetchCategoried();
    this.fetchPromotions();
    

  },
  methods:{
    fetchCategoried() {
      axios.get("http://localhost:3000/api/categories").then((result) => {
        // console.log(result.data);
        this.Category = result.data;
      });
    },
    fetchPromotions() {
      axios.get("http://localhost:3000/api/promotions").then((result) => {
        // console.log(result.data);
        this.promotion = result.data;
      });
    }
  }
};

</script>
<style scoped>
.container{
  width: 75rem;
  height: 35rem;
  padding: 1rem;
  background-color: rgb(211, 227, 253);

  
}
.row1{
  width: 100%;
  height: 31%;
  padding: 7px;
  display: flex;
  justify-content: space-between;
}
.row2{
  width: 100%;
  height: 69%;
  display: flex;
  justify-content: space-between;
}
</style>
