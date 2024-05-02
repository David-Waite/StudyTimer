<template>
  <h1>Home</h1>
  <button>Click me to add name</button>
</template>

<script setup>
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
<style></style>
