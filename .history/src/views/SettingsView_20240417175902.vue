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
      pomodoroTime: 0.15,
      shortRest: 0.1,
      longRest: 30,
      pomodoroTillLongRest: 4
    }
  }
}
</script>
<style></style>
