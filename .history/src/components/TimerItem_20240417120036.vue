<template>
  <div>
    {{ Math.floor(timerCount / 60) }} : {{ timerCount - Math.floor(timerCount / 60) * 60 }}
    <button @click="play">Play</button>
    <button @click="pause">Pause</button>
  </div>
</template>

<script>
export default {
  props: ['startTime'],
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
</script>
