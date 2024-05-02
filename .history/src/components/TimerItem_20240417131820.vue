<template>
  <div>
    <button @click="startTimer">Start</button>
    <button @click="pauseTimer">Pause</button>
    <button @click="playTimer">Play</button>
    <p>Time left: {{ timerCount }}</p>
  </div>
</template>

<script>
import { useTimerStore } from '@/stores/timer'

export default {
  setup() {
    const timerStore = useTimerStore()

    return {
      startTimer: timerStore.startTimer,
      pauseTimer: timerStore.pauseTimer,
      playTimer: timerStore.playTimer,
      timerCount: timerStore.timerCount
    }
  }
}
</script>
