<template>
  <div>
    {{ Math.floor(timerCount / 60) }} : {{ timerCount - Math.floor(timerCount / 60) * 60 }}
    <button @click="play">Play</button>
    <button @click="pause">Pause</button>
  </div>
</template>

<script setup>
import { usePomodoroSettingsStore } from '@/stores/settings'
const settings = usePomodoroSettingsStore()
</script>
