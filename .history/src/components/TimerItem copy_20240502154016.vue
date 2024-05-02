<script setup>
import { useTimerStore } from '@/stores/timer'
const timer = useTimerStore()
</script>
<template>
  <div>
    <div>
      <button v-if="timer.stage == 'start'" @click="timer.startTimer">Start</button>
      <button v-if="timer.stage == 'running'" @click="timer.pauseTimer">Pause</button>
      <button v-if="timer.stage == 'paused'" @click="timer.unpauseTimer">Unpause</button>
      <button v-if="timer.stage == 'paused'" @click="timer.stopTimer">Stop</button>
    </div>

    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            :stroke-dasharray="strokeDashArray"
            class="base-timer__path-remaining"
            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
          ></path>
        </g>
      </svg>
      <!-- Your existing code... -->
      <span id="base-timer-label" class="base-timer__label">
        {{ Math.floor(timer.time / 60) }}:{{
          timer.time % 60 < 10 ? '0' + (timer.time % 60) : timer.time % 60
        }}</span
      >{{ strokeDashArray }}
      {{ test }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timerStore: useTimerStore(),
      strokeDashArray: 283,
      test: 23
    }
  },
  computed: {},
  created() {
    this.timerStore.startTimer()
  },
  beforeDestroy() {
    this.timerStore.stopTimer()
  },
  watch: {
    'timerStore.time': function (newTime, oldTime) {
      console.log(`Time has updated from ${oldTime} to ${newTime}`)
      let timePassed = (newTime - this.timerStore.pomodoroTime) * -1

      let rawTimeFraction = newTime / this.timerStore.pomodoroTime

      rawTimeFraction = rawTimeFraction - (1 / this.timerStore.pomodoroTime) * (1 - rawTimeFraction)

      this.strokeDashArray = `${(rawTimeFraction * 283).toFixed(0)} 283`
    }
  }
}
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
