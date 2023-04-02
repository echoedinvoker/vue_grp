<template>
  <Products :products="products" @set-filters="load($event)"/>
</template>

<script setup lang="ts">
import { Filter } from '@/model/Filter';
import { Product } from '@/model/Product';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import Products from './Products.vue';

const products = ref<Product[]>([])
const filters = reactive({
  s: ''
})

const load = async (f: Filter) => {
  filters.s = f.s

  const arr = []
  if (filters.s) {
    arr.push(`s=${filters.s}`)
  }

  const { data } = await axios.get(`products/frontend?${arr.join('&')}`)
  products.value = data
}

onMounted(async () => {
  await load(filters)
})
</script>
