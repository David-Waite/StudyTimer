<script setup>
import { useTimerStore } from '@/stores/timer'
import { BIconPause, BIconPlay, BIconStop } from 'bootstrap-icons-vue'
const timer = useTimerStore()
</script>
<template>
  <div>
    <div class="base-timer">
      <div class="buttonContiainer">
        <button v-if="timer.stage == 'start'" @click="timer.startTimer"><BIconPlay /></button>
        <button v-if="timer.stage == 'running'" @click="timer.pauseTimer"><BIconPause /></button>
        <div class="pauseStopContainer">
          <button v-if="timer.stage == 'paused'" @click="timer.unpauseTimer"><BIconPlay /></button>
          <button v-if="timer.stage == 'paused'" @click="timer.stopTimer"><BIconStop /></button>
        </div>
      </div>
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

      <span id="base-timer-label" class="base-timer__label">
        {{ Math.floor(time / 60) }}:{{ time % 60 < 10 ? '0' + (time % 60) : time % 60 }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settings: Object
  },
  data() {
    return {
      timerStore: useTimerStore(),
      strokeDashArray: 283,
      startingTime: this.settings.pomodoroTime * 60,
      time: this.settings.pomodoroTime * 60,
      intervalId: null,
      shortRest: this.settings.shortRest * 60,
      longRest: this.settings.longRest * 60,
      pomodoroTillLongRest: this.settings.pomodoroTillLongRest,
      pomodoroTillLongRestSetting: this.settings.pomodoroTillLongRest,
      pomodoroTime: this.settings.pomodoroTime * 60,
      current: 'pomodoro',
      stage: 'start'
    }
  },
  computed: {},

  watch: {
    time: function (newTime) {
      let rawTimeFraction = newTime / this.startingTime

      rawTimeFraction = rawTimeFraction - (1 / this.startingTime) * (1 - rawTimeFraction)

      this.strokeDashArray = `${(rawTimeFraction * 283).toFixed(0)} 283`
    }
  }
}
</script>

<style>
.pauseStopContainer {
  display: flex;
  gap: 12px;
}
.buttonContiainer {
  position: absolute;
  z-index: 2;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}
button {
  background-color: transparent;
  border: 2px solid rgb(237, 237, 237);
  border-radius: 50%;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.buttonContiainer svg {
  font-size: 24px;
  font-weight: 900;
  color: rgb(237, 237, 237);
}
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
  stroke-width: 1px;
  stroke: rgb(237, 237, 237);
}

.base-timer__path-remaining {
  stroke-width: 1px;
  stroke: aqua;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  fill-rule: nonzero;
  stroke: aqua;
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
  color: white;
}
</style>
