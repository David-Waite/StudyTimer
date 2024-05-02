<script setup></script>
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
        // Use Firebase authentication API to create a new user
        await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        // Redirect to the home page or another route
        this.$router.push('/home')
      } catch (error) {
        console.error('Error creating user:', error.message)
      }
    }
  }
}
</script>
