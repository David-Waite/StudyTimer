// stores/counter.js
import { defineStore } from 'pinia'

export const usePomodoroSettings = defineStore('pomodoroSettings', {
  state: () => {
    return { pomodoroTime: 0, shortRest: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    }
  }
})
