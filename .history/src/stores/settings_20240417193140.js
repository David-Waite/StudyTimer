import { defineStore } from 'pinia'

import db from '@/main'
import { doc, updateDoc } from 'firebase/firestore'
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
    async updatedSettings(settings) {
      const washingtonRef = doc(db, 'cities', 'DC')

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        capital: true
      })

      this.settings = settings
    }
  }
})
