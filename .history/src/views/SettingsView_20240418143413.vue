<template>
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
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePomodoroSettingsStore } from '@/stores/settings'
const settings = usePomodoroSettingsStore()
settings.init()
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
