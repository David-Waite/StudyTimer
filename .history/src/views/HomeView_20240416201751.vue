<template>
  <h1>Home</h1>
  <button>Click me to add name</button>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth'
import router from '@/router'
</script>

<script>
export default {
  data() {
    return {
      auth: ''
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
  }
}
</script>
<style></style>
