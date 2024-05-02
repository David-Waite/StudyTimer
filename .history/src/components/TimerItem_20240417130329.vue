<template>
  <div>
    <p>Countdown: {{ formattedTime }}</p>
    <button @click="timer.playTimer">Start Timer</button>
    <button @click="timer.pauseTimer">Pause Timer</button>
  </div>
</template>

<script setup>
import { useTimerStore } from '@/stores/timer.js' // Adjust the path accordingly

const timer = useTimerStore()
</script>

<script>
export default {
  computed: {
    formattedTime: () => {
      const minutes = Math.floor(this.timer.timerCount / 60)
      const seconds = this.timer.timerCount % 60
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
  },
  mounted() {
    timer.countDownTimer()
  }
}
</script>
