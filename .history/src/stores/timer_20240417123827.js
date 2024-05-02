import { defineStore } from 'pinia'
import { usePomodoroSettingsStore } from '@/stores/settings'
const settings = usePomodoroSettingsStore()

export const useTimerStore = defineStore('timer', {
  state: () => {
    return {
      timerEnabled: false,
      timerCount: settings.pomodoroTime * 60,
      pomodoroTillLongRest: settings.pomodoroTillLongRest
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
