<script setup>
import { RouterLink } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router'
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      isLoggedIn: false
    }
  },
  methods: {
    handleSignOut() {
      signOut(this.auth)
      router.push('/signup')
    }
  },
  mounted() {
    this.auth = getAuth()

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  }
}
</script>

<template>
  <div class="navContainer" v-if="this.$route.path != '/login'">
    <RouterLink v-if="!isLoggedIn" to="/login">Login</RouterLink>
    <button v-if="isLoggedIn" @click="handleSignOut">log out</button>
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
