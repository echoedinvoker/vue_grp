<template>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">{{ title }}</h1>
        <p class="lead text-body-secondary">{{ description }}</p>
        <p v-if="!user.user">
          <RouterLink to="/login" class="btn btn-primary my-2">Login</RouterLink>
          <RouterLink to="/register" class="btn btn-secondary my-2">Register</RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user';
import { computed } from '@vue/reactivity';


const user = useUser()
const title = computed(() => user.user ? '$' + user.user.revenue : 'Welcome')
const description = computed(() => user.user ? 'You have earned this far' : 'Share links to earn money')

</script>
