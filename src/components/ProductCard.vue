<template>
  <div class="product-card">
    <img :src="imgSrc" alt="/" />
        <h3>
            <slot name="title"></slot>
        </h3>
    <p>
        <slot name="price"></slot>
    </p>
  </div>
</template>

<script setup>

const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
});

</script>

<style scoped>
    .product-card  {
        max-width: 200px;
        border: 1px solid #ccc;
    }
    .product-card img {
        width: 100%;
    }
    .product-card h3 {
        margin: 10px 0px;
    }
</style>
