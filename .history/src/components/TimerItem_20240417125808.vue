<template>
  <div>
    <p>Countdown: {{ formattedTime }}</p>
    <button @click="timer.playTimer">Start Timer</button>
    <button @click="timer.pauseTimer">Pause Timer</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTimerStore } from '@/stores/timer.js' // Adjust the path accordingly

const timer = useTimerStore()

const formattedTime = computed(() => {
  const minutes = Math.floor(timer.timerCount / 60)
  const seconds = timer.timerCount % 60
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})

// Initialize the timer when the component is created
timer.countDownTimer()
</script>
