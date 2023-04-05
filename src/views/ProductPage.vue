<template>
    <div class="product-card">
        <img :src="product.image" alt="">
        <h3>{{product.title}}</h3>
        <p>{{ product.description }}</p>
        <p class="prix">{{ product.price }} euros</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const product = ref({});

console.log(route.params.id)

onMounted(() => {
    fetch(`https://fakestoreapi.com/products/${route.params.id}`)
    .then((response) => response.json())
    .then((data) => {
        product.value = data;
        console.log(product.value)
    });
});
</script>

<style scoped>
 .product-card {    
    max-width: 450px;
    overflow: hidden;
    margin: 15px auto;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
 }
 .product-card img{    
  
  max-height: 300px;
  object-fit: cover;
}
 

 @media screen and (min-width: 768px) {
    .product-card {
        max-width: 1240px;
        width: 100%;
    }

 }
</style>