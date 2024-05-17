<script setup>
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import db from '@/main'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <img class="background" src="../assets/imageBackface.png" alt="background image " />
    <h1>Sign Up</h1>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <div class="messages">
      <p>Have an account? <RouterLink to="/login">Click here</RouterLink></p>
    </div>
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
          email: this.email,
          settings: {
            pomodoroTime: 0.15,
            shortRest: 0.1,
            longRest: 30,
            pomodoroTillLongRest: 4
          },
          timeStudying: 0,
          vehiclesOwned: [
            {
              name: 'Van',
              price: 0,
              status: 'equipped'
            }
          ]
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
<style scoped>
.background {
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
}
h1 {
  margin-top: 20vh;
  line-height: 36px;
  text-align: center;
  margin-bottom: 48px;
  font-size: 24px;
}

.messages {
  font-size: 16.6px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 32px;
  color: white;
}
.messages div {
  background-color: green;
  width: 100%;
  text-align: center;
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
  position: relative;
}
.errorMsg {
  position: absolute;
  font-size: 16.67px;
  color: red;
  display: flex;
  align-items: center;
  gap: 5px;
}
.errorMsg i {
  font-size: 14px;
}

button {
  padding: 8px 14px;
  border-radius: 16px;
  border: 2px solid white;
  width: 370px;
  color: white;
  cursor: pointer;
  background-color: black;
}
button:hover {
  background-color: white;
  border-color: black;
  color: black;
}
</style>
