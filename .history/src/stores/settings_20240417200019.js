import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDoc, doc, updateDoc } from 'firebase/firestore'

import db from '@/main'

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
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)
        console.log('hi')
        console.log(docSnap.data)
        if (docSnap.exists()) {
          this.settings = docSnap.data().settings
        }
      }
    },

    async updatedSettings(settings) {
      const auth = getAuth()
      const washingtonRef = doc(db, 'users', auth.currentUser.uid)

      await updateDoc(washingtonRef, {
        settings: this.settings
      })

      this.settings = settings
    },

    init() {
      const auth = getAuth()

      onAuthStateChanged(auth, (user) => {
        this.fetchSettings(user)
      })
    }
  }
})