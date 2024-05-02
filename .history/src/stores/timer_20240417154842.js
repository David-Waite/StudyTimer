import { defineStore } from 'pinia'

export const usePomodoroSettingsStore = defineStore('time', {
  state: () => {
    return { time: 25 }
  }
})
