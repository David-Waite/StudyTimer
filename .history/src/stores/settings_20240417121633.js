import { defineStore } from 'pinia'

export const usePomodoroSettings = defineStore('settings', {
  state: () => {
    return { pomodoroTime: 25, shortRest: 5, longRest: 30, pomodoroTillLongRest: 4 }
  },

  actions: {
    setPomodoro(mintues) {
      this.pomodoroTime = mintues
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
