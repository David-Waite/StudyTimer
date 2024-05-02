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

  <button class="spin circle">Spin Circle</button>
</template>

<script setup>
import { useTimerStore } from '@/stores/timer'
const timer = useTimerStore()
</script>

<style>
button {
  border: 0;
  position: relative;
}

button::before,
button::after {
  box-sizing: inherit;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
}

.spin {
  height: 200px;
  width: 200px;
}

.spin::before,
.spin::after {
  top: 0;
  right: 0;
}

.spin::before {
  border: 2px solid transparent;
}

.spin:hover::before {
  border-top-color: #0eb7da;
  border-right-color: #0eb7da;
  border-bottom-color: #0eb7da;
  transition:
    border-top-color 0.15s linear,
    border-right-color 0.15s linear 0.1s,
    border-bottom-color 0.15s linear 0.2s;
}

.spin::after {
  border: 0 solid transparent;
}

.spin:hover::after {
  border-top: 2px solid #0eb7da;
  border-left-width: 2px;
  border-right-width: 2px;
  transform: rotate(270deg);
  transition:
    transform 0.4s linear 0s,
    border-left-width 0s linear 0.35s,
    -webkit-transform 0.4s linear 0s;
}

.circle {
  border-radius: 100%;
  box-shadow: none;
}

.circle::before,
.circle::after {
  border-radius: 100%;
}
</style>
