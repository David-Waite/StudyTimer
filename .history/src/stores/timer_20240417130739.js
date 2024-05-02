import { defineStore } from 'pinia'
import { usePomodoroSettingsStore } from '@/stores/settings'

export const useTimerStore = defineStore('timer', {
  state: () => {
    const settings = usePomodoroSettingsStore()
    return {
      timerEnabled: true,
      timerCount: settings.pomodoroTime * 60,
      pomodoroTillLongRest: settings.pomodoroTillLongRest
    }
  },

  actions: {
    playTimer() {
      this.timerEnabled = true
      console.log('start')
      console.log(this.timerEnabled)
    },
    pauseTimer() {
      this.timerEnabled = false
      console.log('stop')
      console.log(this.timerEnabled)
    },
    countDownTimer() {
      if (this.timerCount > 0 && this.timerEnabled) {
        setTimeout(() => {
          this.timerCount--
          this.countDownTimer()
        }, 1000)
      }
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
