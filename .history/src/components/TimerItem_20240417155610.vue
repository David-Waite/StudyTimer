<template>
  <div>
    <h1>{{ minutes }}:{{ seconds < 10 ? '0' + seconds : seconds }}</h1>
    <button @click="startTimer">Start</button>
    <button @click="pauseTimer">Pause</button>
    <button @click="unpauseTimer">Unpause</button>
    <button @click="stopTimer">Stop</button>
  </div>
</template>
<script setup>
import { useTimerStore } from '@/stores/timer'
</script>

<script>
export default {
  data() {
    const timer = useTimerStore()
    return {
      time: timer.time * 60,
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
      this.intervalId = setInterval(() => {
        if (this.time > 0) {
          this.time--
        } else {
          this.stopTimer()
        }
      }, 1000)
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
</script>
