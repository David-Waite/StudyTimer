<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navContainer">
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/shop">Shop</RouterLink>
    <RouterLink to="/settings">Settings</RouterLink>
  </div>
</template>

<style scoped>
.navContainer {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
