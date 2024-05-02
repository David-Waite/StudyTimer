<template>
  <h1>settings</h1>
  <RouterLink to="/">home</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePomodoroSettingsStore } from '@/stores/settings'
const settings = usePomodoroSettingsStore()
</script>

<script>
export default {
  data() {
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
