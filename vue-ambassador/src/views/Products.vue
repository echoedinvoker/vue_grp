<template>
  <div class="col-md-12 md-4 input-group">
    <input class="form-control" placeholder="Search" @keyup="search($event)"/>
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
</template>

<script setup lang="ts">
import { Product } from '@/model/Product';

defineProps<{
  products: Product[]
}>()

const emit = defineEmits<{
  (e: 'set-filters', ev: any): void
}>()

const search = (ev: any) => {
  emit('set-filters', { s: ev.target.value })
}

</script>
