import { defineStore } from 'pinia'
import { getAuth } from 'firebase/auth'
import { getDoc } from 'firebase/firestore'

import db from '@/main'
import { doc, updateDoc } from 'firebase/firestore'
export const usePomodoroSettingsStore = defineStore('settings', {
  state: async () => {
    const auth = getAuth()
    const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid))
    if (userDoc.exists()) {
      const userData = userDoc.data()
      console.log('User data:', userData)
    }
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
      const auth = getAuth()
      const washingtonRef = doc(db, 'users', auth.currentUser.uid)

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        settings: this.settings
      })

      this.settings = settings
    }
  }
})
