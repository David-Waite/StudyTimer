<template>
  <div>
    <p>Countdown: {{ formattedTime }}</p>
    <button @click="timer.playTimer">Start Timer</button>
    <button @click="timer.pauseTimer">Pause Timer</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useTimerStore } from '@/stores/timer.js' // Adjust the path accordingly
const timer = useTimerStore()
</script>
