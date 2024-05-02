<template>
  <h1>settings</h1>
  <RouterLink to="/">home</RouterLink>
  <form @submit.prevent="registerUser">
    <label for="pomodoroTime">Pomodoro Time</label>
    <input v-model="pomodoroTime" type="number" id="pomodoroTime" required />
    <label for="shortRest"></label>
    <input v-model="shortRest" type="text" id="shortRest" required />
    <input v-model="number" type="password" placeholder="Password" required />
    <button type="submit">Sign Up</button>
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
