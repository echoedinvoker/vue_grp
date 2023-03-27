<template>
  <section>
    <h3>Account Informations</h3>
    <form @submit.prevent="submitInfo">
      <div class="mb-3">
        <label>Email</label>
        <input class="form-control" name="email" v-model="info.email">
      </div>
      <div class="mb-3">
        <label>First name</label>
        <!-- <input class="form-control" name="first_name" v-model="info.firstName"> -->
        <input class="form-control" name="first_name" v-model="info.first_name">
      </div>
      <div class="mb-3">
        <label>Last name</label>
        <!-- <input class="form-control" name="last_name" v-model="info.lastName"> -->
        <input class="form-control" name="last_name" v-model="info.last_name">
      </div>
    <button class="btn btn-outline-secondary" type="submit">Save</button>
    </form>
  </section>
  <section>
    <h3>Password</h3>
    <form @submit.prevent="submitPassword">
      <div class="mb-3">
        <label>Password</label>
        <input class="form-control" name="password" v-model="password.password">
      </div>
      <div class="mb-3">
        <label>Confirm Password</label>
        <!-- <input class="form-control" name="password_confirm" v-model="password.passwordConfirm"> -->
        <input class="form-control" name="password_confirm" v-model="password.password_confirm">
      </div>
    <button class="btn btn-outline-secondary">Save</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user';
import { computed } from '@vue/reactivity';
import axios from 'axios';
import { reactive, watch } from 'vue';

const store = useUser()
const user = computed(() => store.user)

const info = reactive({
  //firstName: user.value?.first_name,
  first_name: user.value?.first_name,
  //lastName: user.value?.last_name,
  last_name: user.value?.last_name,
  email: user.value?.email,
})
const password = reactive({
  password: '',
  //passwordConfirm: ''
  password_confirm: ''
})

watch(user, () => {
  info.email = user.value?.email
  //info.firstName = user.value?.first_name
  info.first_name = user.value?.first_name
  info.last_name = user.value?.last_name
})

async function submitInfo() {
  console.log(info)
  const { data } = await axios.put('users/info', info)
  store.setUser(data)
}

async function submitPassword() {
  await axios.put('users/password', password)
}

</script>
