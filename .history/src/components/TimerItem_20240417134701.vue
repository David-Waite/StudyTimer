<template>
  <div>
    <button @click="flipIsTrue">Flip isTrue</button>
    <p>isTrue: {{ isTrue }}</p>
  </div>
</template>

<script>
import { useExampleStore } from '@/stores/example'

export default {
  setup() {
    const exampleStore = useExampleStore()

    return {
      flipIsTrue: exampleStore.flipIsTrue,
      isTrue: exampleStore.isTrue
    }
  }
}
</script>
<!-- <template>
  <div>
    <p>Countdown: {{ formattedTime }}</p>
    <button @click="startTimer">Start Timer</button>
    <button @click="pauseTimer">Pause Timer</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useTimerStore } from '@/stores/timer.js' // Adjust the path accordingly

export default {
  setup() {
    const timer = useTimerStore()

    const formattedTime = computed(() => {
      const minutes = Math.floor(timer.timerCount / 60)
      const seconds = timer.timerCount % 60
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    })

    function startTimer() {
      timer.playTimer()
    }

    function pauseTimer() {
      timer.pauseTimer()
    }

    // Initialize the timer when the component is created
    timer.countDownTimer()

    return {
      formattedTime,
      startTimer,
      pauseTimer
    }
  }
}
</script> -->
