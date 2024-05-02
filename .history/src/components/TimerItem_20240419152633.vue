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
</template>

<script setup>
import { useTimerStore } from '@/stores/timer'
const timer = useTimerStore()
</script>

<style>
.base-timer {
  position: relative;
  width: 300px;
  height: 300px;
}

.base-timer__svg {
  transform: scaleX(-1);
}

.base-timer__circle {
  fill: none;
  stroke: none;
}

.base-timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}

.base-timer__path-remaining {
  stroke-width: 7px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  fill-rule: nonzero;
  stroke: currentColor;
}

.base-timer__path-remaining.green {
  color: rgb(65, 184, 131);
}

.base-timer__path-remaining.orange {
  color: orange;
}

.base-timer__path-remaining.red {
  color: red;
}

.base-timer__label {
  position: absolute;
  width: 300px;
  height: 300px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}
</style>
