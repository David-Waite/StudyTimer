import { defineStore } from 'pinia'
// import { usePomodoroSettingsStore } from '@/stores/settings'
import { reactive } from 'vue'
export const useTimerStore = defineStore('timer', {
  state: () =>
    reactive({
      isTrue: false
    }),
  actions: {
    flipIsTrue() {
      this.isTrue = !this.isTrue
      console.log(this.isTrue)
    }
  }
})
