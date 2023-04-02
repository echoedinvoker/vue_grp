<template>
  <Products :products="filteredProducts" :filters="filters" :last-page="lastPage" @set-filters="filterProducts($event)"/>
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
  sort: '',
  page: 1
})
const perPage = 9
const lastPage = ref(0)

const filterProducts = (f: Filter) => {
  filters.s = f.s
  filters.sort = f.sort
  filters.page = f.page

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

  lastPage.value = Math.ceil(products.length / perPage)
  filteredProducts.value = products.slice(0, perPage * filters.page)
}

onMounted(async () => {
  const { data } = await axios.get<Product[]>('products/frontend')
  allProducts.value = data
  filteredProducts.value = data.slice(0, perPage * filters.page)
  lastPage.value = Math.ceil(data.length / perPage)
}) 
</script>
