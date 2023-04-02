<template>
  <!-- <Products :products="products" @set-filters="filterProducts($event)"/> -->
  <Products :products="filteredProducts" @set-filters="filterProducts($event)"/>
</template>

<script setup lang="ts">
import { Filter } from '@/model/Filter';
import { Product } from '@/model/Product';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Products from './Products.vue';

const allProducts = ref<Product[]>([])
const filteredProducts = ref<Product[]>([])

const filterProducts = (f: Filter) => {
  filteredProducts.value = allProducts.value.filter(p => {
    return p.title.toLowerCase().indexOf(f.s.toLowerCase()) >= 0 ||
      p.description.toLowerCase().indexOf(f.s.toLowerCase()) >= 0
  })
}

onMounted(async () => {
  const { data } = await axios.get<Product[]>('products/frontend')
  allProducts.value = data
  filteredProducts.value = data
}) 
</script>
