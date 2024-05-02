<template>
  <div>
    <h1>
      {{ Math.floor(timer.time / 60) }}:{{
        timer.time % 60 < 10 ? '0' + (timer.time % 60) : timer.time % 60
      }}
    </h1>
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
