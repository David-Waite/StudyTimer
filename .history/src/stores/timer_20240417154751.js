import { defineStore } from 'pinia'
// import { usePomodoroSettingsStore } from '@/stores/settings'

export const useTimerStore = defineStore('timer', {
  state: () => {
    // const settings = usePomodoroSettingsStore()
    return {
      time: 25
    }
  }
  // actions: {}
})
