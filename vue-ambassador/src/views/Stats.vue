<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>Link</th>
              <th>Users</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="link in links" :key="link.id">
              <!-- <td>{{ `http://localhost:5000/${link.code}` }}</td> -->
              <td>{{ checkUrl(link.code) }}</td>
              <td>{{ link.count }}</td>
              <td>{{ link.revenue }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Link } from '@/model/Link';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const links = ref<Link[]>([])

const checkUrl = (code: string) => {
  return `${process.env.VUE_APP_CHECKOUT_URL}/${code}`
}

onMounted(async () => {
  const { data } = await axios.get('stats')
  links.value = data
})
</script>

