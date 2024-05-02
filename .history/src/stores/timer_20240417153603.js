import { defineStore } from 'pinia'
// import { usePomodoroSettingsStore } from '@/stores/settings'

export const useTimerStore = defineStore('timer', {
  state: () => {
    return {
      time: 25 * 60,
      intervalId: null
    }
  },
  actions: {
    startTimer() {
      console.log('hello')
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
