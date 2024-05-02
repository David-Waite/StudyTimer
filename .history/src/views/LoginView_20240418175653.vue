<script setup>
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="container">
    <h1>A Trip to Pomodoro</h1>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20vh;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
input {
  width: 300px;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /* border: 1px solid transparent; */
}

input:focus {
  display: grid;
  place-content: center;
  color: white;
  text-shadow: 0 1px 0 #000;

  --border-angle: 0turn;
  /* // For animation. */
  --main-bg: conic-gradient(from var(--border-angle), #213, #112 5%, #112 60%, #213 95%);

  border: solid 5px transparent;
  border-radius: 2em;
  --gradient-border: conic-gradient(
    from var(--border-angle),
    transparent 25%,
    #08f,
    #f03 99%,
    transparent
  );

  background:
    /* // padding-box clip this background in to the overall element except the border. */
    var(--main-bg) padding-box,
    /* // border-box extends this background to the border space */ var(--gradient-border)
      border-box,
    /* // Duplicate main background to fill in behind the gradient border. You can remove this if you want the border to extend "outside" the box background. */
      var(--main-bg) border-box;

  background-position: center center;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }

  &:hover {
    animation-play-state: paused;
  }
}

@property --border-angle {
  syntax: '<angle>';
  inherits: true;
  initial-value: 0turn;
}
</style>
