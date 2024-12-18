<template>
    <div class="showcase">
        <div class="content">
            <h1>Don't miss amazing <br />grocery-deals</h1>
            <p>Sign up for the daily newsletter</p>
            <div class="newsltter">
                <input type="email" placeholder="Your email address" v-model="email"/>
                <button @click="subscribe" >Subscribe</button>
            </div>
        </div>
        <div class="images">
            <img src="/images/case1.png" alt="Grocery Basket"/> 
        </div>
    </div>
</template>
<script>
export default {
    name: "showcasecomponent",
    data(){
        return{
            email: "",
        };
    },
    methods:{
        subscribe(){
            if(this.email){
                alert(`Subscribed successfully with: ${this.email}`);
                this.email="";
            }else{
                alert("Please enter a valid email.");
            }
        },
    },
};
</script>
<style scoped>
.showcase{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#fee6d3 ;
    border: 2px solid #ff5743;
    padding: 2rem;
    font-family: Arial, sans-serif;
    max-width: 1500px;
    margin: auto;
    border-radius: 5px;
}
.content h1{
    color: #313131 ;
    font-size: 2rem;
    margin-bottom: 10px;
}
.content p {
  color: #555;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
.newsletter {
  display: flex;
  align-items: center;
}
 input {
  width: 250px;
  height: 35px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}
 button {
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0784f2;
}
.images img {
  max-width: 500px;
  border-radius: 10px;
}

</style>