<script setup>
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="container">
    <h1>A Trip to <br /><span>Pomodoro</span></h1>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="text" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
  <p>Don't have an account? <RouterLink to="/signup">Click here</RouterLink></p>
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
            break
          case 'auth/wrong-password':
            this.errorMessage = 'Password was incorrect'
            break
          default:
            this.errorMessage = 'something went wrong'
            break
        }

        console.error('Error creating user:', error)
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
  line-height: 36px;
  text-align: center;
  font-weight: 400;
}
h1 span {
  font-size: 71.66px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
}
form {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
input {
  width: 500px;
  padding: 15px 25px;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  border: none;
  /* border: 1px solid transparent; */
}

input:focus {
  background-color: lightblue;
}
</style>
