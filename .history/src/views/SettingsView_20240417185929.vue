<template>
  <h1>settings</h1>
  <RouterLink to="/">home</RouterLink>
  <form @submit.prevent="saveChanges">
    <label for="pomodoroTime">Pomodoro Time</label>
    <input v-model="pomodoroTime" type="number" id="pomodoroTime" step="0.01" />
    <label for="shortRest">short Rest</label>
    <input v-model="shortRest" type="number" id="shortRest" step="0.01" />
    <label for="longRest">long Rest</label>
    <input v-model="longRest" type="number" id="longRest" step="0.01" />
    <label for="longRest">pomodoro Till Long Rest</label>
    <input v-model="pomodoroTillLongRest" type="number" id="pomodoroTillLongRest" step="0.01" />
    <button type="submit">Save changes</button>
  </form>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePomodoroSettingsStore } from '@/stores/settings'
import { useTimerStore } from '@/stores/timer'
</script>

<script>
export default {
  data() {
    const settings = usePomodoroSettingsStore().settings
    return {
      pomodoroTime: settings.pomodoroTime,
      shortRest: settings.shortRest,
      longRest: settings.longRest,
      pomodoroTillLongRest: settings.pomodoroTillLongRest,
      orginal: {
        pomodoroTime: settings.pomodoroTime,
        shortRest: settings.shortRest,
        longRest: settings.longRest,
        pomodoroTillLongRest: settings.pomodoroTillLongRest
      }
    }
  },
  methods: {
    saveChanges() {
      const settings = usePomodoroSettingsStore()
      const timer = useTimerStore()

      settings.updatedSettings({
        pomodoroTime: this.pomodoroTime,
        shortRest: this.shortRest,
        longRest: this.longRest,
        pomodoroTillLongRest: this.pomodoroTillLongRest
      })
      console.log('reloading settings')

      timer.reloadSettings()
    }
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
