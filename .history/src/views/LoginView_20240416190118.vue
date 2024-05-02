<script setup>
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
</script>
<template>
  <div>
    <h2>Signin Up</h2>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p v-if="this.errorMessage">{{ this.errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async registerUser() {
      try {
        console.log(this.email, this.password)
        // Use Firebase authentication API to create a new user
        await signInWithEmailAndPassword(getAuth(), this.email, this.password)
        // Redirect to the home page or another route
        this.$router.push('/')
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            this.errorMessage = 'No account with that email found'
            break
          case 'auth/invalid-email':
            this.errorMessage = 'Invalid Email'
        }

        console.error('Error creating user:', error)
      }
    }
  }
}
</script>
