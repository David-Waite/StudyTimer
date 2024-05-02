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

  <div :style="() => { '--distance': 20 }" class="timer"></div>
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
  --from: 30deg;
}
.timer {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid black;
  background: conic-gradient(
    from var(--from),
    var(--color1),
    var(--color2) var(--distance),
    transparent var(--distance)
  );
}
</style>
