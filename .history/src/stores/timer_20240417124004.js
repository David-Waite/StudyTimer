import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', {
  state: () => {
    return {
      timerEnabled: false,
      timerCount: 25 * 60,
      pomodoroTillLongRest: 3
    }
  },

  actions: {
    playTimer() {
      this.timerEnabled = true
    },
    pauseTimer() {
      this.timerEnabled = false
    }
  },
  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.timerCount--
        }, 1000)
      }
    },
    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        }
      },
      immediate: true // Trigger the watcher upon creation
    }
  }
})
