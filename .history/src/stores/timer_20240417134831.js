import { defineStore } from 'pinia'
// import { usePomodoroSettingsStore } from '@/stores/settings'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    isTrue: false
  }),
  actions: {
    flipIsTrue() {
      this.isTrue = !this.isTrue
      console.log(this.isTrue)
    }
  },
  watch: {
    isTrue(newValue, oldValue) {
      console.log(`isTrue changed from ${oldValue} to ${newValue}`)
    }
  }
})
//   state: () => {
//     const settings = usePomodoroSettingsStore()
//     return {
//       timerEnabled: true,
//       timerCount: settings.pomodoroTime * 60,
//       pomodoroTillLongRest: settings.pomodoroTillLongRest
//     }
//   },

//   actions: {
//     playTimer() {
//       this.timerEnabled = !this.timerEnabled
//     },
//     pauseTimer() {
//       this.timerEnabled = false
//       console.log('Timer paused')
//       console.log(this.timerCount)
//     },
//     countDownTimer() {
//       if (this.timerCount > 0 && this.timerEnabled) {
//         console.log(this.timerCount)
//         setTimeout(() => {
//           this.timerCount--
//           this.countDownTimer()
//         }, 1000)
//       }
//     }
//   },

//   watch: {
//     timerEnabled(newVal, oldVal) {
//       console.log(`timerEnabled changed from ${oldVal} to ${newVal}`)
//       if (newVal) {
//         this.timerStore.startTimer()
//       } else {
//         this.timerStore.pauseTimer()
//       }
//     },
//     timerCount: {
//       handler(value) {
//         if (value > 0 && this.timerEnabled) {
//           setTimeout(() => {
//             this.timerCount--
//           }, 1000)
//         }
//       },
//       immediate: true // Trigger the watcher upon creation
//     }
//   }
// })
