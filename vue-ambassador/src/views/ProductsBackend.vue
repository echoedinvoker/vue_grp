<template>
  <Products :products="products" :filters="filters" :last-page="lastPage" @set-filters="load($event)"/>
</template>

<script setup lang="ts">
import { Filter } from '@/model/Filter';
import { Product } from '@/model/Product';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import Products from './Products.vue';

const products = ref<Product[]>([])
const filters = reactive<Filter>({
  s: '',
  sort: '',
  page: 1
})
const lastPage = ref(0)

const load = async (f: Filter) => {
  filters.s = f.s
  filters.sort = f.sort
  filters.page = f.page


  const arr = []
  if (filters.s) {
    arr.push(`s=${filters.s}`)
  }
  if (filters.sort) {
    arr.push(`sort=${filters.sort}`)
  }
  if (filters.page) {
    arr.push(`page=${filters.page}`)
  }

  // const { data: { data } } = await axios.get(`products/backend?${arr.join('&')}`)
  const { data } = await axios.get(`products/backend?${arr.join('&')}`)

  products.value = filters.page === 1 ? data.data : [ ...products.value, ...data.data ]
  lastPage.value = data.meta.last_page
}

onMounted(async () => {
  await load(filters)
}) 
</script>
