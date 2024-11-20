<template>
    <div class="card" :style="{backgroundColor:color}">
        <div class="card-img">
            <img :src="image" :alt="name">
        </div>
        <div class="card-text">
            <h4>{{ name }}</h4>
            <p>{{ productCount }}</p>
        </div>
    </div>
</template>
<script>
export default{
    name:"category",
    props:{
        productCount:{
            type:String,
            required:true

        },
        image:String,
        name:String,
        productCount:String,
        color:String
    },
    categories: [
        //  {
        //      name: "Peach",
        //      productCount: 17,
        //      color: "#FEFBE8",
        //      image: "../image/alpha.png"
        //  },
        //  {
        //      name: "Red Apple",
        //      productCount: 68,
        //      color: "#FFF0E9",
        //      image: "../image/apple.png"
        //  },
        //  {
        //      name: "Snack",
        //      productCount: 34,
        //      color: "#FEF4EB",
        //      image: "../image/snac.png"
        //  },
        
      ]
}
</script>
<style scoped>
.card{
    color: black;
    border-radius: 10px;
    border: 1px solid green;
    width: 6rem;
    height: 8.5rem;

}
.card-img{
    width: 100%;
    height: 60%;
    border-radius: 10px;
}
.card-img img{
    width: 100%;
    height: 100%;
}
.card-text{
    width: 100%;
    height: 40%;
    border-radius: 10px;
    padding: 3px;

}
.card-text h4{
    display: flex;
    justify-content: center;
    font-size: 13px;

}
.card-text p{
    display: flex;
    justify-content: center;
    opacity: 0.8;
    font-size: 10px;
}

</style>