<script setup>
import { usePomodoroSettingsStore } from '@/stores/settings'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router'
import { BIconXLg } from 'bootstrap-icons-vue'
const settings = usePomodoroSettingsStore()
settings.init()
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      open: true
    }
  },
  methods: {
    handleSignOut() {
      signOut(this.auth)
      router.push('/signup')
    },
    closeSettings() {
      console.log('closing')
      this.$router.push('/')
    }
  },
  computed() {},
  mounted() {
    //might not need this have a proper check
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
<template>
  <div v-if="$route.name === `settings`" class="settings">
    <h1>SETTINGS</h1>
    <h2>WARNING UPDATING SETTINGS WILL CAUSE THE PAGE TO RELOAD AND TIMER TO BE RERESHED</h2>
    <div class="close" @click="closeSettings"><BIconXLg /></div>

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

<style scoped>
.settings {
  position: absolute;
  width: 600px;
  top: 5vh;
  left: calc(50vw - 300px);
  z-index: 2;
  background: rgba(41, 27, 17, 0.99);
  backdrop-filter: blur(5px);
  padding: 50px;
}
h1 {
  text-align: center;
  color: rgb(255, 185, 72);
  font-size: 32px;
  margin-top: -20px;
  font-family: fantasy;
}
.close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
  cursor: pointer;
}
.close:hover {
  color: rgb(172, 172, 172);
}

form {
  display: grid;
  grid-template-columns: 1fr 70px;
  row-gap: 30px;
  align-items: center;
}

label {
  color: white;
}
input {
  background-color: transparent;
  color: white;
  border-radius: 5px;
  padding: 5px;
}
</style>
