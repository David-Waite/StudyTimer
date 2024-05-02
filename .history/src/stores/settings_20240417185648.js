import { defineStore } from 'pinia'

export const usePomodoroSettingsStore = defineStore('settings', {
  state: () => {
    return {
      settings: {
        pomodoroTime: 0.15,
        shortRest: 0.1,
        longRest: 30,
        pomodoroTillLongRest: 4
      }
    }
  },

  actions: {
    updatedSettings(settings) {
      this.settings = settings
    }
})
