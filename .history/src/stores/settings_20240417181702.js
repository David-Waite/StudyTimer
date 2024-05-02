import { defineStore } from 'pinia'

export const usePomodoroSettingsStore = defineStore('settings', {
  state: () => {
    return { pomodoroTime: 0.15, shortRest: 0.1, longRest: 30, pomodoroTillLongRest: 4 }
  },

  actions: {
    setPomodoro() {
      console.log('pomodoroTime changed')
      // this.pomodoroTime = mintues
    },
    setShortRest(mintues) {
      this.shortRest = mintues
    },
    setLongRest(mintues) {
      this.longRest = mintues
    },
    setPomodoroTillLongRest(amount) {
      this.pomodoroTillLongRest = amount
    }
  }
})
