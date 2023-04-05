<template>
  <div class="home">
    <RouterLink v-for="(product, index) in products" :key="index" :to="`/product/${product.id}`">
      <ProductCard :imgSrc="product.image">
        <template #title>{{ product.title }}</template>
        <template #price>{{ product.price }} €</template>
      </ProductCard>
    </RouterLink>
  </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import { ref, onMounted } from "vue";

const products = ref();

onMounted(() => {
    fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => (products.value = data));
})


</script>

<style scoped>
.home {
  width: 100%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
@media screen and (min-width: 768px) {
  .home {
    max-width: 1240px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 15px;
  }
}
</style>
