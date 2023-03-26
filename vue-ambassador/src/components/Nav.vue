<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><RouterLink to="/" class="nav-link px-2" :class="{'link-secondary': !isBackend}">Frontend</RouterLink></li>
        <li><RouterLink to="/profile" class="nav-link px-2" :class="{'link-secondary': isBackend}">Backend</RouterLink></li>
      </ul>

      <div class="col-md-3 text-end" v-if="user">
        <a href='#' class="btn btn-outline-primary me-2" @click="logout">Logout</a>
        <button type="button" class="btn btn-primary">
          {{ user.first_name }} {{ user.last_name }}
        </button>
      </div>
      <div class="col-md-3 text-end" v-else>
        <RouterLink to="/login" class="btn btn-outline-primary me-2">Login</RouterLink>
        <RouterLink to="/register" class="btn btn-primary">Sign-up</RouterLink>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user';
import { computed } from '@vue/reactivity';
import axios from 'axios';
import { useRoute } from 'vue-router';

const store = useUser()
const route = useRoute()

const isBackend = computed(() => !route.path.includes('/profile'))

const user = computed(() => {
  return store.user 
}) 

async function logout() {
  await axios.post('logout')
  store.setUser(null)
}
</script>

