<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please register</h1>
      <div class="form-floating">
        <input
          class="form-control"
          placeholder="Fisrt Name"
          v-model="firstName"
        />
        <label>First Name</label>
      </div>
      <div class="form-floating">
        <input
          class="form-control"
          placeholder="Last Name"
          v-model="lastName"
        />
        <label>Last Name</label>
      </div>

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
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          placeholder="Password Confirm"
          v-model="passwordConfirm"
        />
        <label>Password Confirm</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

const submit = async () => {
  const { data } =await axios
    .post("register", {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value,
      password_confirm: passwordConfirm.value,
    })
  console.log(data)
};
</script>
<script lang="ts"></script>

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
