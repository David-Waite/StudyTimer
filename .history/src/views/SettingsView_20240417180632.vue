<template>
  <h1>settings</h1>
  <RouterLink to="/">home</RouterLink>
  <form @submit.prevent="registerUser">
    <label for="pomodoroTime">Pomodoro Time</label>
    <input v-model="pomodoroTime" type="number" id="pomodoroTime" required />
    <label for="shortRest">short Rest</label>
    <input v-model="shortRest" type="number" id="shortRest" required />
    <label for="longRest">long Rest</label>
    <input v-model="longRest" type="number" id="longRest" required />
    <label for="longRest">pomodoro Till Long Rest</label>
    <input v-model="pomodoroTillLongRest" type="number" id="pomodoroTillLongRest" required />
    <button type="saveChanges">Save changes</button>
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
  },
  methods: {}
}
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
