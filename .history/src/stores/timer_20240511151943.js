import { watch } from 'vue'
import { defineStore } from 'pinia'

import { updateDoc, getDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import db from '@/main'

import { useFirebaseDataStore } from './firebaseData'
const firebaseStore = useFirebaseDataStore()
export const useTimerStore = defineStore('time', {
  state: () => {
    let settings = {
      pomodoroTime: 4,
      shortRest: 4,
      longRest: 4,
      pomodoroTillLongRest: 4
    }

    // Watch for changes in userData

    return {
      startingTime: settings.pomodoroTime * 60,
      time: settings.pomodoroTime * 60,
      intervalId: null,
      shortRest: settings.shortRest * 60,
      longRest: settings.longRest * 60,
      pomodoroTillLongRest: settings.pomodoroTillLongRest,
      pomodoroTillLongRestSetting: settings.pomodoroTillLongRest,
      pomodoroTime: settings.pomodoroTime * 60,
      current: 'pomodoro',
      stage: 'start'
    }
  },
  // ... rest of your code
  watch: {
    'firebaseStore.userData': function (userData) {
      this.userData = userData
      this.startingTime = 2
      console.log('hi')
    }
  },
  actions: {
    startTimer() {
      this.stage = 'running'
      this.intervalId = setInterval(() => {
        if (this.time > 0) {
          this.time--
        } else {
          this.hitZero()
        }
      }, 1000)
    },
    pauseTimer() {
      this.stage = 'paused'
      clearInterval(this.intervalId)
      this.intervalId = null
    },
    unpauseTimer() {
      this.stage = 'running'
      if (!this.intervalId) {
        this.startTimer()
      }
    },
    stopTimer() {
      this.pauseTimer()
      this.stage = 'start'
      this.pomodoroTillLongRest = this.pomodoroTillLongRestSetting
      this.time = this.pomodoroTime
      this.startingTime = this.pomodoroTime
      this.current = 'pomodoro'
    },
    async hitZero() {
      this.pauseTimer()
      this.stage = 'start'
      if (this.current === 'pomodoro') {
        const auth = getAuth()
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid))
        const userData = userDoc.data()
        const timeStudying = userData.timeStudying

        const washingtonRef = doc(db, 'users', auth.currentUser.uid)

        await updateDoc(washingtonRef, {
          timeStudying: timeStudying + this.pomodoroTime
        })

        this.pomodoroTillLongRest--
        if (this.pomodoroTillLongRest === 0) {
          this.time = this.longRest
          this.startingTime = this.longRest
          this.current = 'longRest'
          return
        }
        this.time = this.shortRest
        this.startingTime = this.shortRest
        this.current = 'shortRest'
        return
      }
      if (this.current === 'shortRest') {
        this.time = this.pomodoroTime
        this.startingTime = this.pomodoroTime
        this.current = 'pomodoro'
        return
      }
      if (this.current === 'longRest') {
        this.stopTimer()
      }
    },
    reloadSettings() {
      this.stopTimer()
    }
  }
})
