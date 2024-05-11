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
          this.userData = userData
        }
      }
    }
  }
})
