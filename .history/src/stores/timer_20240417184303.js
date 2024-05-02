import { defineStore } from 'pinia'
import { usePomodoroSettingsStore } from '@/stores/settings'

export const useTimerStore = defineStore('time', {
  state: () => {
    const settings = usePomodoroSettingsStore()
    return {
      time: settings.pomodoroTime * 60,
      intervalId: null,
      shortRest: settings.shortRest * 60,
      longRest: settings.longRest * 60,
      pomodoroTillLongRest: settings.pomodoroTillLongRest,
      pomodoroTillLongRestSetting: settings.pomodoroTillLongRest,
      pomodoroTime: settings.pomodoroTime * 60,
      current: 'pomodoro',
      stage: 'start'
    }
  },
  actions: {
    startTimer() {
      this.stage = 'running'
      this.intervalId = setInterval(() => {
        if (this.time > 0) {
          this.time--
        } else {
          this.hitZero()
        }
      }, 1000)
    },
    pauseTimer() {
      this.stage = 'paused'
      clearInterval(this.intervalId)
      this.intervalId = null
    },
    unpauseTimer() {
      this.stage = 'running'
      if (!this.intervalId) {
        this.startTimer()
      }
    },
    stopTimer() {
      this.pauseTimer()
      this.stage = 'start'
      this.pomodoroTillLongRest = this.pomodoroTillLongRestSetting
      this.time = this.pomodoroTime
      this.current = 'pomodoro'
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
        this.time = this.shortRest
        this.current = 'shortRest'
        return
      }
      if (this.current === 'shortRest') {
        this.time = this.pomodoroTime
        this.current = 'pomodoro'
        return
      }
      if (this.current === 'longRest') {
        this.stopTimer()
      }
    },
    reloadSettings() {
      const settings = usePomodoroSettingsStore()
      this.time = settings.pomodoroTime * 60;
   
      this.shortRest = settings.shortRest * 60
      this.longRest = settings.longRest * 60,
      this.pomodoroTillLongRest = settings.pomodoroTillLongRest,
      
      this.pomodoroTime = settings.pomodoroTime * 60,
    }
  }
})
