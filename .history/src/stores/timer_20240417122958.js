import { defineStore } from 'pinia'

export const usePomodoroSettingsStore = defineStore('settings', {
  state: () => {
    return { timerEnabled: false, shortRest: 5, longRest: 30, pomodoroTillLongRest: 4 }
  },

  actions: {
    setPomodoro(mintues) {
      this.pomodoroTime = mintues
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


data() {
    return {
      timerEnabled: true,
      timerCount: this.startTime * 60 // 25 minutes in seconds
    }
  },
  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.timerCount--
        }, 1000)
      }
    },
    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        }
      },
      immediate: true // Trigger the watcher upon creation
    }
  },
  methods: {
    play() {
      this.timerEnabled = true
    },
    pause() {
      this.timerEnabled = false
    }
  }
}