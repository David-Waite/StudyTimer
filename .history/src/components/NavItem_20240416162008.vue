<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navContainer">
    <RouterLink to="/login">login</RouterLink>
    <RouterLink to="/shop">shop</RouterLink>
    <RouterLink to="/settings">settings</RouterLink>
  </div>
</template>

<style scoped>
.navContainer {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
