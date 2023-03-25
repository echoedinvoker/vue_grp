<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          placeholder="name@example.com"
          v-model="email"
        />
        <label>Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
        <label>Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  </main>
</template>

<script setup lang="ts">
import router from "@/router";
import axios from "axios";
import { ref } from "vue";

const email = ref("");
const password = ref("");

async function submit() {
  // await axios.post("http://localhost:8000/api/admin/login", {
  await axios.post("login", {
    email: email.value,
    password: password.value,
    // }, { withCredentials: true })
  });

  await router.replace("/");
}
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
