<script setup>
import { RouterLink } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
</script>

<script>
export default {
  data() {
    return {
      auth: ''
    }
  },
  methods: {}
}
</script>

<template>
  <div class="navContainer">
    <RouterLink to="/login">Login</RouterLink>
    <button>log out</button>
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
