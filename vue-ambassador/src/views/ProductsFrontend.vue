<template>
  <Products :products="filteredProducts" :filters="filters" @set-filters="filterProducts($event)"/>
</template>

<script setup lang="ts">
import { Filter } from '@/model/Filter';
import { Product } from '@/model/Product';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import Products from './Products.vue';

const allProducts = ref<Product[]>([])
const filteredProducts = ref<Product[]>([])
const filters = reactive<Filter>({
  s: '',
  sort: ''
})

const filterProducts = (f: Filter) => {
  filters.s = f.s
  filters.sort = f.sort

  console.log(f)
  // filteredProducts.value = allProducts.value.filter(p => {
  let products = allProducts.value.filter(p => {
    return p.title.toLowerCase().indexOf(f.s.toLowerCase()) >= 0 ||
      p.description.toLowerCase().indexOf(f.s.toLowerCase()) >= 0
  })

  if (filters.sort === 'asc' || filters.sort === 'desc') {
    products.sort((a, b) => {
      const diff = a.price - b.price

      if (diff === 0) return 0

      const sign = Math.abs(diff) / diff

      return filters.sort === 'asc' ? sign : -sign
    })
  }

  filteredProducts.value = products
}

onMounted(async () => {
  const { data } = await axios.get<Product[]>('products/frontend')
  allProducts.value = data
  filteredProducts.value = data
}) 
</script>
