<script setup>
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="container">
    <h1>A Trip to <br /><span>Pomodoro</span></h1>
    <form @submit.prevent="registerUser">
      <div>
        <input v-model="email" type="text" placeholder="Email" required />
        <p class="errorMsg" v-if="errorMessage">{{ errorMessage }}</p>
      </div>

      <input v-model="password" type="password" placeholder="Password" required />
      <p class="errorMsg" v-if="errorMessage">{{ errorMessage }}</p>
      <button class="button-19" type="submit">SIGN UP</button>
    </form>
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
  line-height: 36px;
  text-align: center;
  margin-bottom: 48px;
}
h1 span {
  font-size: 71.66px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
input {
  padding: 8px 14px;
  border-radius: 16px;
  border: 2px solid black;
  width: 370px;
}
button {
  padding: 8px 14px;
  border-radius: 16px;
  border: 2px solid black;
  width: 370px;
  cursor: pointer;
}
button:hover {
  background-color: lightblue;
}
</style>
