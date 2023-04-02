<template>
  <div class="col-md-12 mb-4" v-if="link">
    <div class="alert alert-info" role="alert">
      {{ link }}
    </div>
  </div>
  <div class="col-md-12 mb-4" v-if="error">
    <div class="alert alert-danger" role="alert">
      {{ error }}
    </div>
  </div>
  <div class="col-md-12 md-4 input-group">
    <input class="form-control" placeholder="Search" @keyup="search($event)"/>
    <div class="input-group-append" v-if="selected.length > 0">
      <button class="btn btn-info" @click="generate">Generate Link</button>
    </div>
    <div class="input-group-append">
      <select class="form-select" @change="sort($event)">
        <option>Select</option>
        <option value="asc">Price Ascending</option>
        <option value="desc">Price Descending</option>
      </select>
    </div>
  </div>


  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div class="col" v-for="product in products" @click="select(product.id)">
      <div class="card shadow-sm" :class="{selected: selected.some(s => s === product.id)}">
        <img :src="product.image" height="200"/>
        <div class="card-body">
          <p class="card-text">{{ product.title }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <small class="text-body-secondary">{{ product.price }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center mt-4" v-if="filters.page < lastPage">
    <button class="btn btn-primary" @click="loadMore">Load More</button>
  </div>
</template>

<script setup lang="ts">
import { Filter } from '@/model/Filter';
import { Product } from '@/model/Product';
import axios from 'axios';
import { ref } from 'vue';

const selected = ref<number[]>([])
const link = ref('')
const error = ref('')

const generate = async () => {
  try {
    const { data } = await axios.post('links', {
      products: selected.value
    })

    link.value = `Link generated: ${process.env.VUE_APP_CHECKOUT_URL}/${data.code}`

  } catch (_) {
    error.value = 'You must be logged in to generate links'
  } finally {
    setTimeout(() => {
      link.value = ''
      error.value = ''
    }, 5000)
  }
}

// defineProps
const props = defineProps<{
  products: Product[]
  filters: Filter
  lastPage: number
}>()

const select = (id: number) => {
  console.log('id')
  if (selected.value.some(s => s === id)) {
    selected.value = selected.value.filter(s => s !== id)
    return
  }
  selected.value = [ ...selected.value, id ]
}

const emit = defineEmits<{
  (e: 'set-filters', ev: any): void
}>()

const search = (ev: any) => {
  // emit('set-filters', { s: ev.target.value })
  emit('set-filters', {
    ...props.filters,
    s: ev.target.value,
    page: 1
  })
}

const sort = (ev: any) => {
  emit('set-filters', { 
    ...props.filters,
    sort: ev.target.value,
    page: 1
  })
}

const loadMore = () => {
  emit('set-filters', { 
     ...props.filters,
     page: props.filters.page + 1
  })
}

</script>

<style scoped>
.selected {
  border: 4px solid darkcyan;
}
</style>
