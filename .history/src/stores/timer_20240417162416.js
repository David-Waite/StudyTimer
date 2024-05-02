import { defineStore } from 'pinia'
import { usePomodoroSettingsStore } from '@/stores/settings'

export const useTimerStore = defineStore('time', {
  state: () => {
    const settings = usePomodoroSettingsStore()
    return {
      time: settings.pomodoroTime * 60,
      intervalId: null,
      shortRest: settings.shortRest,
      longRest: settings.longRest,
      pomodoroTillLongRest: settings.pomodoroTillLongRest,
      pomodoroTillLongRestSetting:  settings.pomodoroTillLongRest,
      pomodoroTime: settings.pomodoroTime,
      current: 'pomodoro'
    }
  },
  actions: {
    startTimer() {
      this.intervalId = setInterval(() => {
        if (this.time > 0) {
          this.time--
        } else {
          this.hitZero()
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
    },
    hitZero() {
      this.pauseTimer()
      if (this.current === 'pomodoro') {
        this.pomodoroTillLongRest--
        if (this.pomodoroTillLongRest === 0) {
          this.time = this.longRest
          this.current = 'longRest'
          return
        }
        this.time = this.shortRest * 60
        this.current = 'shortRest'
        return
      }
      if (this.current === 'shortRest') {
        this.time = this.pomodoroTime * 60
        this.current = 'pomodoro'
        return
      }
      if (this.current === 'longRest') {
       
        this.pomodoroTillLongRest = settings.setPomodoroTillLongRest
        this.time = time.
      }
    }
  }
})
