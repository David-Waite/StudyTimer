<template>
  <div class="container">
    <h1>settings</h1>
    <RouterLink to="/">home</RouterLink>
    <form @submit.prevent="settings.updateSettings()">
      <label for="pomodoroTime">Pomodoro Time</label>
      <input v-model="settings.settings.pomodoroTime" type="number" id="pomodoroTime" step="0.01" />
      <label for="shortRest">short Rest</label>
      <input v-model="settings.settings.shortRest" type="number" id="shortRest" step="0.01" />
      <label for="longRest">long Rest</label>
      <input v-model="settings.settings.longRest" type="number" id="longRest" step="0.01" />
      <label for="longRest">pomodoro Till Long Rest</label>
      <input
        v-model="settings.settings.pomodoroTillLongRest"
        type="number"
        id="pomodoroTillLongRest"
        step="0.01"
      />
      <button type="submit">Save changes</button>
    </form>
    <button @click="handleSignOut">logo out></button>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePomodoroSettingsStore } from '@/stores/settings'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router'
const settings = usePomodoroSettingsStore()
settings.init()
</script>
<script>
export default {
  data() {
    return {
      auth: ''
    }
  },
  methods: {
    handleSignOut() {
      signOut(this.auth)
      router.push('/signup')
    }
  },
  computed() {},
  mounted() {
    this.auth = getAuth()

    const settings = usePomodoroSettingsStore()

    onAuthStateChanged(this.auth, (user) => {
      if (!user) {
        this.$router.push('/login')
        return
      }
      settings.init()
    })
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  width: 90vw;
  height: 90vh;
  top: 5vh;
  left: 5vw;
  z-index: 2;
  background: rgba(41, 27, 17, 0.99);
  backdrop-filter: blur(5px);
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
