import { defineStore } from 'pinia'

export const useTimerStore = defineStore('time', {
  state: () => {
    return { time: 25 }
  }
})
