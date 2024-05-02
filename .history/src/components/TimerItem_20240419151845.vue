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
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.timer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(white, white) content-box no-repeat,
    conic-gradient(red 50%, 0, green) border-box;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
.timer {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.timer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  linear-gradient(white, white) content-box no-repeat,
    conic-gradient(red 50%, 0, green) border-box;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
