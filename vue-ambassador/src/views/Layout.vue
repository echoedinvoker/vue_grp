<template>
<Nav />
<main>
  <Header v-if="showHeader" />
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <RouterView />
    </div>
  </div>

</main>
</template>

<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import { onMounted } from 'vue';
import axios from 'axios';
import { useUser } from '@/store/user';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';

const user = useUser()
const route = useRoute()

const showHeader = computed(() => !route.path.includes('/profile') && !route.path.includes('/stats'))

onMounted(async () => {
  const { data } = await axios.get('user')
  user.setUser(data)
})
</script>

