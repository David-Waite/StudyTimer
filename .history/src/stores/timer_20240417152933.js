import { defineStore } from 'pinia'
// import { usePomodoroSettingsStore } from '@/stores/settings'
import { reactive } from 'vue'
export const useTimerStore = defineStore('timer', {
  state: () =>
    reactive({
      time: 25 * 60,
      intervalId: null
    }),
  actions: {
    flipIsTrue() {
      this.isTrue = !this.isTrue
      console.log(this.isTrue)
    }
  }
})
