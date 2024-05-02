<template>
  <div>
    {{ Math.floor(timer.timerCount / 60) }} : {{ timerCount - Math.floor(timerCount / 60) * 60 }}
    <button @click="play">Play</button>
    <button @click="pause">Pause</button>
  </div>
</template>

<script setup>
import { useTimerStore } from '@/stores/settings'
const timer = useTimerStore()
</script>
