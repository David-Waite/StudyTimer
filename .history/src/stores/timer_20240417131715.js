import { defineStore } from 'pinia'
import { usePomodoroSettingsStore } from '@/stores/settings'

export const useTimerStore = defineStore('timer', {
  state: () => {
    const settings = usePomodoroSettingsStore()
    return {
      timerEnabled: true,
      timerCount: settings.pomodoroTime * 60,
      pomodoroTillLongRest: settings.pomodoroTillLongRest,
      intervalId: null
    }
  },
  actions: {
    startTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
      }
      this.intervalId = setInterval(() => {
        if (this.timerCount > 0) {
          this.timerCount--
        } else {
          clearInterval(this.intervalId)
          this.timerEnabled = false
        }
      }, 1000)
    },
    pauseTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    },
    playTimer() {
      if (!this.intervalId) {
        this.startTimer()
      }
    }
  }
})
