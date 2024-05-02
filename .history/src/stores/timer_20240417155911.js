import { defineStore } from 'pinia'
import { usePomodoroSettingsStore } from '@/stores/settings'

export const useTimerStore = defineStore('time', {
  state: () => {
    const settings = usePomodoroSettingsStore()
    return { 
      time: timer.time * 60,
      intervalId: null 
  }
  },
  actions: {
    setTime(time) {
      time: timer.time * 60,
      intervalId: null
    }
  }
})
