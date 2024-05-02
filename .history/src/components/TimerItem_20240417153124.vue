<template>
  <div>
    <!-- <h1>{{ minutes }}:{{ seconds < 10 ? '0' + seconds : seconds }}</h1>
    <button @click="startTimer">Start</button>
    <button @click="pauseTimer">Pause</button>
    <button @click="unpauseTimer">Unpause</button>
    <button @click="stopTimer">Stop</button> -->
    <h1>{{ this.settings.mintues }}:{{ seconds < 10 ? '0' + seconds : seconds }}</h1>
    <button @click="startTimer">Start</button>
    <button @click="pauseTimer">Pause</button>
    <button @click="unpauseTimer">Unpause</button>
    <button @click="stopTimer">Stop</button>
  </div>
</template>

<script>
import { usePomodoroSettingsStore } from '@/stores/settings'
const settings = usePomodoroSettingsStore()

// export default {
//   data() {
//     return {
//       time: 25 * 60,
//       intervalId: null
//     }
//   },
//   computed: {
//     minutes() {
//       return Math.floor(this.time / 60)
//     },
//     seconds() {
//       return this.time % 60
//     }
//   },
//   methods: {
//     startTimer() {
//       this.intervalId = setInterval(() => {
//         if (this.time > 0) {
//           this.time--
//         } else {
//           this.stopTimer()
//         }
//       }, 1000)
//     },
//     pauseTimer() {
//       clearInterval(this.intervalId)
//       this.intervalId = null
//     },
//     unpauseTimer() {
//       if (!this.intervalId) {
//         this.startTimer()
//       }
//     },
//     stopTimer() {
//       this.pauseTimer()
//       this.time = 25 * 60
//     }
//   }
// }
</script>
