// stores/counter.js
import { defineStore } from 'pinia'

export const usePomodoroSettings = defineStore('pomodoroSettings', {
  state: () => {
    return { pomodoroTime: 25, shortRest: 5, longRest: 30 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setPomodoro(mintues) {
      this.pomodoroTime = mintues
    },
    setShortRest(mintues) {
      this.shortRest = mintues
    }
  }
})
