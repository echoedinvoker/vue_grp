<template>
  <div class="col-md-12 md-4 input-group">
    <input class="form-control" placeholder="Search" @keyup="search($event)"/>
      <div class="input-group-append">
        <select class="form-select" @change="sort($event)">
          <option>Select</option>
          <option value="asc">Price Ascending</option>
          <option value="desc">Price Descending</option>
        </select>
      </div>
  </div>


  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div class="col" v-for="product in products">
      <div class="card shadow-sm">
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

// defineProps<{
const props = defineProps<{
  products: Product[]
  filters: Filter
  lastPage: number
}>()

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
