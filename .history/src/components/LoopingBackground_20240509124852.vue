<script setup>
import { useTimerStore } from '@/stores/timer'
const timer = useTimerStore()
</script>
<template>
  <div class="outerContainer">
    <img class="image" src="../assets/background.jpg" />
    {{ timer.current }}
    <img class="imageBackface" src="../assets/background.jpg" />
  </div>
</template>

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
