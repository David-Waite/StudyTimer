import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDoc, doc, updateDoc } from 'firebase/firestore'

import db from '@/main'
import { useTimerStore } from './timer'

export const usePomodoroSettingsStore = defineStore('settings', {
  state: () => ({
    settings: {
      pomodoroTime: 0.15,
      shortRest: 0.1,
      longRest: 30,
      pomodoroTillLongRest: 4
    }
  }),

  actions: {
    async fetchSettings(user) {
      if (user) {
        const timer = useTimerStore()
        const userDoc = await getDoc(doc(db, 'users', user.uid))
        if (userDoc.exists()) {
          const userData = userDoc.data()
          this.settings = userData.settings
          timer.reloadSettings()
          console.log(this.settings)
          this.settings = userData.settings
        }
      }
    },

    async updateSettings(settings) {
      const auth = getAuth()
      const washingtonRef = doc(db, 'users', auth.currentUser.uid)
      this.settings = settings
      await updateDoc(washingtonRef, {
        settings: this.settings
      })
    },

    init() {
      const auth = getAuth()

      onAuthStateChanged(auth, (user) => {
        this.fetchSettings(user)
      })
    }
  }
})
