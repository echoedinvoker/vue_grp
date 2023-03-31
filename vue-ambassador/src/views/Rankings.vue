<template>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(revenue, name, id) in rankings" :key="id">
              <td>{{ id }}</td>
              <td>{{ name }}</td>
              <td>{{ revenue }}</td>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script setup lang="ts">
import { Ranking } from '@/model/Ranking';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const rankings = ref<Ranking[]>([])


onMounted(async () => {
  const { data } = await axios.get<Ranking[]>('rankings')
  console.log(data)
  rankings.value = data
})
</script>
