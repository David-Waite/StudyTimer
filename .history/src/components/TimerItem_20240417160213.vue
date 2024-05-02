<template>
  <div>
    <h1>{{ Math.floor(timer.time / 60) }}:{{ timer.time % 60 < 10 ? '0' + seconds : seconds }}</h1>
    <button @click="startTimer">Start</button>
    <button @click="pauseTimer">Pause</button>
    <button @click="unpauseTimer">Unpause</button>
    <button @click="stopTimer">Stop</button>
  </div>
</template>
<script setup>
import { useTimerStore } from '@/stores/timer'
const timer = useTimerStore()
</script>

<!-- <script>
export default {
  data() {
    const timer = useTimerStore()
    return {
      time: timer.time,
      intervalId: null
    }
  },
  computed: {
    minutes() {
      return Math.floor(this.time / 60)
    },
    seconds() {
      return this.time % 60
    }
  },
  methods: {
    startTimer() {
      const timer = useTimerStore()
      timer.startTimer()
    },
    pauseTimer() {
      clearInterval(this.intervalId)
      this.intervalId = null
    },
    unpauseTimer() {
      if (!this.intervalId) {
        this.startTimer()
      }
    },
    stopTimer() {
      this.pauseTimer()
      this.time = 25 * 60
    }
  }
}
</script> -->
