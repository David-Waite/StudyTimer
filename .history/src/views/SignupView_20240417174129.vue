<script setup>
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
</script>
<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async registerUser() {
      try {
        console.log(this.email, this.password)
        // Use Firebase authentication API to create a new user
        await createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        // Redirect to the home page or another route
        const userRef = doc(db, 'users', this.auth.currentUser.uid)
      // Example: Add user-specific data
      await setDoc(userRef, {
        name: 'John Doe',
        email: 'john@example.com'}

        // Other user properties}
        this.$router.push('/')
      } catch (error) {
        console.error('Error creating user:', error)
      }
    }
  }
}
</script>
