<template>
  <h1>settings</h1>
  <RouterLink to="/">home</RouterLink>
  <form @submit.prevent="registerUser">
    <label for="pomodoroTime">Pomodoro Time</label>
    <input v-model="pomodoroTime" type="number" id="pomodoroTime" />
    <label for="shortRest">short Rest</label>
    <input v-model="shortRest" type="number" id="shortRest" />
    <label for="longRest">long Rest</label>
    <input v-model="longRest" type="number" id="longRest" />
    <label for="longRest">pomodoro Till Long Rest</label>
    <input v-model="pomodoroTillLongRest" type="number" id="pomodoroTillLongRest" />
    <button type="saveChanges">Save changes</button>
  </form>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePomodoroSettingsStore } from '@/stores/settings'
</script>

<script>
const settings = usePomodoroSettingsStore()
export default {
  data() {
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
      this.pomodoroTime != this.orginal.pomodoroTime && settings.setPomodoro(this.pomodoroTime)
      this.shortRest != this.orginal.shortRest && settings.setShortRest(this.shortRest)
      this.longRest != this.orginal.longRest && settings.setLongRest(this.longRest)
      this.pomodoroTillLongRest != this.orginal.pomodoroTillLongRest &&
        settings.setPomodoroTillLongRest(this.pomodoroTillLongRest)
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
