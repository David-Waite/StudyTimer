<template>
  <div>
    <h1>
      {{ Math.floor(timer.time / 60) }}:{{
        timer.time % 60 < 10 ? '0' + (timer.time % 60) : timer.time % 60
      }}
    </h1>
    <button v-if="timer.stage == 'start'" @click="timer.startTimer">Start</button>
    <button v-if="timer.stage == 'running'" @click="timer.pauseTimer">Pause</button>
    <button v-if="timer.stage == 'paused'" @click="timer.unpauseTimer">Unpause</button>
    <button v-if="timer.stage == 'paused'" @click="timer.stopTimer">Stop</button>
  </div>

  <div :style="{ '--distance': `${(timer.time / timer.pomodoroTime) * 100}%` }" class="timer"></div>
</template>

<script setup>
import { useTimerStore } from '@/stores/timer'
const timer = useTimerStore()
</script>

<style>
:root {
  --border: 3px;
  --color1: #6be89b;
  --color2: #0076a5;
  --from: 0deg;
}
.timer {
  width: 200px;
  height: 200px;
  border-radius: 50%;

  border: 1vh solid transparent;
  animation-name: timer;
  animation-duration: 3s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  transition: 1s;
  background:
    linear-gradient(white, white) content-box no-repeat,
    conic-gradient(red var(50%), 0, green) border-box;
}

@keyframes timer {
  from {
    background:
      linear-gradient(white, white) content-box no-repeat,
      conic-gradient(red 50%, 0, green) border-box;
  }

  to {
    background:
      linear-gradient(white, white) content-box no-repeat,
      conic-gradient(red 40%, 0, green) border-box;
  }
}
</style>
