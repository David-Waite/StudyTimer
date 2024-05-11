import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDoc, doc, updateDoc } from 'firebase/firestore'

import db from '@/main'

export const usePomodoroSettingsStore = defineStore('settings', {
  state: () => ({
    userData: null
  }),

  actions: {
    async fetchUser(user) {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid))
        const userData = userDoc.data()
        if (userDoc.exists()) {
          this.settings = userData.settings
          timer.reloadSettings()
        }
      }
    },

    async updateSettings() {
      const auth = getAuth()
      const washingtonRef = doc(db, 'users', auth.currentUser.uid)

      await updateDoc(washingtonRef, {
        settings: this.settings
      })
      location.reload()
    },

    init() {
      const auth = getAuth()

      onAuthStateChanged(auth, (user) => {
        this.fetchSettings(user)
      })
    }
  }
})
