<script setup>
import { useTimerStore } from '@/stores/timer'
</script>
<template>
  <div class="outerContainer">
    <img class="image" :class="getStage" src="../assets/background.jpg" />

    <img class="imageBackface" src="../assets/background.jpg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      timerStore: useTimerStore(),
      stage: 'start'
    }
  },
  computed: {
    getStage() {
      console.log(this.stage)
      return this.stage
    }
  },
  watch: {
    'timerStore.stage': function (newstage) {
      console.log(newstage)
      this.stage = newstage
    }
  }
}
</script>

<style scoped>
.outerContainer {
  position: absolute;
  top: 0px;
  left: 0;
}
.image {
  height: 100vh;
  animation: studyTime 10s linear infinite;
}
.start {
  animation-play-state: paused;
}
.running {
  animation-play-state: running;
}
.paused {
  animation-play-state: paused;
}

.imageBackface {
  position: absolute;
  z-index: -1;
  height: 100vh;
  top: 0;
  left: 0;
}

@keyframes studyTime {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
