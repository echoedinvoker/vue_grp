<template>
  <Products :products="products" />
</template>

<script setup lang="ts">
import { Product } from '@/model/Product';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Products from './Products.vue';

const products = ref<Product[]>([])

onMounted(async () => {
  const { data } = await axios.get<Product[]>('products/frontend')
  products.value = data
}) 
</script>
