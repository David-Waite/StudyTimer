import { defineStore } from 'pinia'
import { useTimerStore } from '@/stores/timer'

export const usePomodoroSettingsStore = defineStore('settings', {
  state: () => {
    return {
      pomodoroTime: 0.15,
      shortRest: 0.1,
      longRest: 30,
      pomodoroTillLongRest: 4
    }
  },

  actions: {
    setPomodoro(mintues) {
      console.log(`pomo ${mintues}`)
      this.pomodoroTime = mintues
      useTimerStore().stopTimer()
    },
    setShortRest(mintues) {
      this.shortRest = mintues
    },
    setLongRest(mintues) {
      this.longRest = mintues
    },
    setPomodoroTillLongRest(amount) {
      this.pomodoroTillLongRest = amount
    }
  }
})
