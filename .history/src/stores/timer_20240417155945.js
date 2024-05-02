import { defineStore } from 'pinia'
import { usePomodoroSettingsStore } from '@/stores/settings'

export const useTimerStore = defineStore('time', {
  state: () => {
    const settings = usePomodoroSettingsStore()
    return {
      time: settings.pomodoroTime * 60,
      intervalId: null
    }
  },
  actions: {
    startTimer() {
      const timer = useTimerStore()
      this.intervalId = setInterval(() => {
        if (this.time > 0) {
          this.time--
          timer.setTime(this.time)
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
