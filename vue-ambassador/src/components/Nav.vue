<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <!-- <li><RouterLink to="/" class="nav-link px-2" :class="{'link-secondary': !isBackend}">Frontend</RouterLink></li> -->
        <li><RouterLink to="/" class="nav-link px-2 link-secondary" exact-active-class="link-dark">Frontend</RouterLink></li>
        <!-- <li><RouterLink to="/profile" class="nav-link px-2" :class="{'link-secondary': isBackend}">Backend</RouterLink></li> -->
        <li><RouterLink to="/backend" class="nav-link px-2 link-secondary" active-class="link-dark">Backend</RouterLink></li>
      </ul>

      <div class="col-md-3 text-end" v-if="user">
        <RouterLink to="/rankings" class="btn me-2">Rankings</RouterLink>
        <RouterLink to="/stats" class="btn me-2">Stats</RouterLink>
        <a href='#' class="btn btn-outline-primary me-2" @click="logout">Logout</a>
        <RouterLink to="/profile" class="btn btn-primary">
          {{ user.first_name }} {{ user.last_name }}
        </RouterLink>
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

const store = useUser()

// const isBackend = computed(() => !route.path.includes('/profile'))

const user = computed(() => {
  return store.user 
}) 

async function logout() {
  await axios.post('logout')
  store.setUser(null)
}
</script>


