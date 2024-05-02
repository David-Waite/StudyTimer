<script setup>
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import db from '@/main'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p>Have an account? <RouterLink to="/login">Click here</RouterLink></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      auth: ''
    }
  },
  methods: {
    async registerUser() {
      try {
        console.log(this.email, this.password)
        this.auth = getAuth()
        // Use Firebase authentication API to create a new user
        await createUserWithEmailAndPassword(this.auth, this.email, this.password)

        // Redirect to the home page or another route
        const userRef = doc(db, 'users', this.auth.currentUser.uid)
        // Example: Add user-specific data
        await setDoc(userRef, {
          username: this.username,
          email: this.email
        })

        // Other user properties}
        this.$router.push('/')
      } catch (error) {
        console.error('Error creating user:', error)
      }
    }
  }
}
</script>
