<template>
  <h1>settings</h1>
  <RouterLink to="/">home</RouterLink>
  <form @submit.prevent="registerUser">
    <label for="pomodoroTime">Pomodoro Time</label>
    <input v-model="pomodoroTime" type="number" id="pomodoroTime" required />
    <label for="shortRest">shortRest</label>
    <input v-model="shortRest" type="number" id="shortRest" required />
    <label for="longRest">longRest</label>
    <input v-model="longRest" type="number" id="longRest" required />
    <label for="longRest">pomodoroTillLongRest</label>
    <input v-model="pomodoroTillLongRest" type="number" id="pomodoroTillLongRest" required />
    <button type="submit">Save changes</button>
  </form>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePomodoroSettingsStore } from '@/stores/settings'
</script>

<script>
export default {
  data() {
    const settings = usePomodoroSettingsStore()
    return {
      pomodoroTime: settings.pomodoroTime,
      shortRest: settings.shortRest,
      longRest: settings.longRest,
      pomodoroTillLongRest: settings.pomodoroTillLongRest
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
