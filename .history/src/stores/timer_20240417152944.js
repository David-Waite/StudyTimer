import { defineStore } from 'pinia'
// import { usePomodoroSettingsStore } from '@/stores/settings'
import { reactive } from 'vue'
export const useTimerStore = defineStore('timer', {
  state: () =>
    reactive({
      time: 25 * 60,
      intervalId: null
    }),
  actions: {
    startTimer() {
      this.intervalId = setInterval(() => {
        if (this.time > 0) {
          this.time--
        } else {
          this.stopTimer()
        }
      }, 1000)
    },
    pauseTimer() {
      clearInterval(this.intervalId)
      this.intervalId = null
    },
    unpauseTimer() {
      if (!this.intervalId) {
        this.startTimer()
      }
    },
    stopTimer() {
      this.pauseTimer()
      this.time = 25 * 60
    }
  }
})
