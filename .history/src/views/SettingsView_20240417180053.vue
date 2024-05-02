<template>
  <h1>settings</h1>
  <RouterLink to="/">home</RouterLink>
  <form @submit.prevent="registerUser">
    <input v-model="pomodoroTime" type="number" placeholder="pomodoroTime" required />
    <input v-model="number" type="text" placeholder="Username" required />
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
<style></style>
