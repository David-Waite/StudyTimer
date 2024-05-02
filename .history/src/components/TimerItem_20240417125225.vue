<template>
  <div>
    <p>Countdown: {{ formattedTime }}</p>
    <button @click="startTimer">Start Timer</button>
    <button @click="pauseTimer">Pause Timer</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTimerStore } from '@stores/timer.js' // Adjust the path accordingly

const store = useTimerStore()

const formattedTime = computed(() => {
  const minutes = Math.floor(store.timerCount / 60)
  const seconds = store.timerCount % 60
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})

function startTimer() {
  store.playTimer()
}

function pauseTimer() {
  store.pauseTimer()
}

// Initialize the timer when the component is created
store.countDownTimer()
</script>
