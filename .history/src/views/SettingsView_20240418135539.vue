<template>
  <h1>settings</h1>
  <RouterLink to="/">home</RouterLink>
  <form @submit.prevent="saveChanges">
    <label for="pomodoroTime">Pomodoro Time</label>
    <input v-model="settings.pomodoroTime" type="number" id="pomodoroTime" step="0.01" />
    <label for="shortRest">short Rest</label>
    <input v-model="settings.shortRest" type="number" id="shortRest" step="0.01" />
    <label for="longRest">long Rest</label>
    <input v-model="settings.longRest" type="number" id="longRest" step="0.01" />
    <label for="longRest">pomodoro Till Long Rest</label>
    <input
      v-model="settings.pomodoroTillLongRest"
      type="number"
      id="pomodoroTillLongRest"
      step="0.01"
    />
    <button type="submit">Save changes</button>
  </form>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePomodoroSettingsStore } from '@/stores/settings'
import { useTimerStore } from '@/stores/timer'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import db from '../main'
</script>

<script>
export default {
  data() {
    const settings = usePomodoroSettingsStore().settings
    return {
      settings: {
        pomodoroTime: settings.pomodoroTime,
        shortRest: settings.shortRest,
        longRest: settings.longRest,
        pomodoroTillLongRest: settings.pomodoroTillLongRest
      },

      orginal: {
        pomodoroTime: settings.pomodoroTime,
        shortRest: settings.shortRest,
        longRest: settings.longRest,
        pomodoroTillLongRest: settings.pomodoroTillLongRest
      }
    }
  },
  methods: {
    async saveChanges() {
      const settings = usePomodoroSettingsStore()
      const timer = useTimerStore()

      await settings.updateSettings(this.settings)

      timer.reloadSettings()
    }
  },
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
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
