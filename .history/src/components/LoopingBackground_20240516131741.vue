<script setup></script>
<template>
  <div class="outerContainer">
    <img class="image" :class="getStage" src="../assets/background.jpg" />

    <img class="imageBackface" src="../assets/background.jpg" />
    <!-- update with working animations and play based on state -->
    <img class="vehicle" src="../assets/vehicles/shop/van.png" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    stage: String,
    vehicles: Array
  },
  computed: {
    getStage() {
      console.log(this.stage)
      return this.stage
    }
  }
}
</script>

<style scoped>
.vehicle {
  position: absolute;
  left: 0;
  top: 60vh;
  height: 30vh;
  left: 50vw;
  transform: translateX(-50%);
}
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
  animation: none;
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
