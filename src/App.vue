<template>
  <div class="container">
    <div class="row1">

     <category v-for="(products, index) in products"
      :key="index"
      :imgScr="products.img"
      :title="products.title"
      :items="products.item"
      :bgColor="products.bgColor"
      />

    </div>
      
    <div class="row2">
      <promotion v-for="(promotion,second) in promotions"
      :key="second"
      :bgImage="promotion.bgImage"
      :bgColorSecond="promotion.bgColorSecond"
      :TittlePromotion="promotion.TittlePromotion"
      />
    </div>
  </div>
</template>
<script >

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
      products:[
        {img:'../image/orange.png', title:"Orange", item:63+"items",bgColor:'#efd7ab'},
        {img:'../image/avokado.png', title:"green avokado", item:63+"items",bgColor:'#aed3ba'},
        {img:'../image/buger.png', title:"brack", item:63+"items",bgColor:'#f2ebc2'},
        {img:'../image/kiwi.png', title:"Oganic kiwi", item:63+"items",bgColor:'#defcdf'},
        {img:'../image/sack.png', title:"cake", item:63+"items",bgColor:'#defcf7'},
        {img:'../image/snac.png', title:"snack", item:63+"items",bgColor:'#f4fcde'},
        {img:'../image/alpha.png', title:"Peach", item:63+"items",bgColor:'#fcecde'},
        {img:'../image/vegatable.png', title:"Vegetable", item:63+"items",bgColor:'#defcec'},
        {img:'../image/strawberry.png', title:"red straeberry", item:63+"items",bgColor:'#fce2de'},
        {img:'../image/apple.png', title:"red apple", item:63+"items",bgColor:'#fac9c1'},

      ],
      promotions:[
        {bgImage:'../image/background1.jpg',bgColorSecond:'#F0E8D5',TittlePromotion:"Everyday Fresh & Clean with our Products"},
        {bgImage:'../image/background2.png',bgColorSecond:'#FDE0FF',TittlePromotion:"Make you Breakfast Healthy and Easy"},
        {bgImage:'../image/background3.jpg',bgColorSecond:'#E2EDEC',TittlePromotion:"The best Organic Products Online"},


      ]

    };
  },
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
