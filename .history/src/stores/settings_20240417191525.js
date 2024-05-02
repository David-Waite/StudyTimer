import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
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
  }
})
