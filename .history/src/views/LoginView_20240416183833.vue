<!-- src/components/Login.vue -->

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { auth } from '../firebase' // Import the initialized auth service

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password)
        // Redirect to a protected route (e.g., dashboard)
      } catch (error) {
        console.error('Login error:', error.message)
        // Handle error (show message to user, etc.)
      }
    }
  }
}
</script>
