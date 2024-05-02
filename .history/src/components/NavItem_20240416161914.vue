<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterLink to="/login">login</RouterLink>
    <RouterLink to="/shop">shop</RouterLink>
    <RouterLink to="/settings">settings</RouterLink>
  </div>
</template>

<style scoped>
a {
}
</style>
