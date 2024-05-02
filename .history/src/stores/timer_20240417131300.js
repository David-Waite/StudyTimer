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
      this.timerEnabled = true // Ensure this line is executed
      console.log('Timer started') // Add a log to verify execution
    },
    pauseTimer() {
      this.timerEnabled = false
      console.log('Timer paused') // Add a log to verify execution
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
    // timerEnabled(value) {
    //   console.log('doing')
    //   if (value) {
    //     setTimeout(() => {
    //       this.timerCount--
    //     }, 1000)
    //   }
    // },
    // timerCount: {
    //   handler(value) {
    //     if (value > 0 && this.timerEnabled) {
    //       setTimeout(() => {
    //         this.timerCount--
    //       }, 1000)
    //     }
    //   },
    //   immediate: true // Trigger the watcher upon creation
    // }
  }
})
