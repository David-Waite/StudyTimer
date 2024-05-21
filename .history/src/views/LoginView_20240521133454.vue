<script setup>
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { RouterLink } from 'vue-router'
import InfoPopup from '../components/InfoPopup.vue'
import { BIconInfoCircleFill } from 'bootstrap-icons-vue'
</script>

<template>
  <BIconInfoCircleFill class="infoBtn" @click="toggleOpen" />
  <InfoPopup :open="openHelp" />
  <div class="container">
    <img class="background" src="../assets/imageBackface.png" alt="background image " />
    <h1>A Trip to <br /><span>Pomodoro</span></h1>

    <form @submit.prevent="registerUser">
      <div>
        <input v-model="email" type="text" placeholder="Email" required />
        <p
          class="errorMsg"
          v-if="
            errorMessage === `Invalid email address` ||
            errorMessage === `No account with that email found`
          "
        >
          <i class="bi bi-exclamation-circle-fill"></i>{{ errorMessage }}
        </p>
      </div>
      <div>
        <input v-model="password" type="password" placeholder="Password" required />
        <p v-if="errorMessage === `Password was incorrect`" class="errorMsg">
          <i class="bi bi-exclamation-circle-fill"></i>{{ errorMessage }}
        </p>
      </div>

      <button class="button-19" type="submit">LOGIN</button>
    </form>
  </div>
  <div class="messages">
    <p>Don't have an account? <RouterLink class="link" to="/signup">Click here</RouterLink></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      openHelp: true
    }
  },
  methods: {
    toggleOpen() {
      console.log('pressed')
      this.openHelp = !this.openHelp
    },
    async registerUser() {
      try {
        console.log(this.email, this.password)
        // Use Firebase authentication API to create a new user
        await signInWithEmailAndPassword(getAuth(), this.email, this.password)
        // Redirect to the home page or another route
        this.$router.push('/')
      } catch (error) {
        console.log(error.code)
        switch (error.code) {
          case 'auth/user-not-found':
            this.errorMessage = 'No account with that email found'
            break
          case 'auth/invalid-email':
            this.errorMessage = 'Invalid email address'
            break
          case 'auth/invalid-credential':
            this.errorMessage = 'Password was incorrect'
            break
          default:
            this.errorMessage = 'Something went wrong'
            break
        }

        console.error('Error creating user:', error)
      }
    }
  }
}
</script>

<style scoped>
.infoBtn {
  position: absolute;
  left: 0;
  color: white;
}
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
  color: white;
}
h1 span {
  font-size: 71.66px;
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
.link {
  color: #0000ee;
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
