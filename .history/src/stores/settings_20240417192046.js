import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import db from '@/main'
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
    async updatedSettings(settings) {
      const userRef = doc(db, 'users', this.auth.currentUser.uid)
      // Example: Add user-specific data
      await setDoc(userRef, {
        name: 'John Doe',
        email: 'john@example.com'

        // Other user properties
      })
      this.settings = settings
    }
  }
})
