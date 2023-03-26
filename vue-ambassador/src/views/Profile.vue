<template>
  <section>
    <h3>Account Informations</h3>
    <form>
      <div class="mb-3">
        <label>Email</label>
        <input class="form-control" name="email">
      </div>
      <div class="mb-3">
        <label>First name</label>
        <input class="form-control" name="first_name">
      </div>
      <div class="mb-3">
        <label>Last name</label>
        <input class="form-control" name="last_name">
      </div>
    <button class="btn btn-outline-secondary">Save</button>
    </form>
  </section>
  <section>
    <h3>Password</h3>
    <form>
      <div class="mb-3">
        <label>Password</label>
        <input class="form-control" name="password">
      </div>
      <div class="mb-3">
        <label>Confirm Password</label>
        <input class="form-control" name="password_confirm">
      </div>
    <button class="btn btn-outline-secondary">Save</button>
    </form>
  </section>
</template>

<script setup lang="ts">

</script>
