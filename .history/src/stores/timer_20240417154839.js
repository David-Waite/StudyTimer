import { defineStore } from 'pinia'

export const usePomodoroSettingsStore = defineStore('settings', {
  state: () => {
    return { time: 25 }
  }
})
