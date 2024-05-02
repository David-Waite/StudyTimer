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
    },
    pauseTimer() {
      this.timerEnabled = false
      console.log('Timer paused')
      console.log(this.timerCount)
    },
    countDownTimer() {
      if (this.timerCount > 0 && this.timerEnabled) {
        console.log(this.timerCount)
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
        this.countDownTimer()
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
