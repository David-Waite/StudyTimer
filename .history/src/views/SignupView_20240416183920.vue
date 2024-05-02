<!-- src/components/Signup.vue -->

<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signup">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
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
    async signup() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password)
        // Redirect to a protected route (e.g., dashboard)
      } catch (error) {
        console.error('Sign-up error:', error.message)
        // Handle error (show message to user, etc.)
      }
    }
  }
}
</script>
