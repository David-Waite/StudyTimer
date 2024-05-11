import { defineStore } from 'pinia'
import { getDoc, doc } from 'firebase/firestore'

import db from '@/main'

export const useFirebaseDataStore = defineStore('firebaseData', {
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
