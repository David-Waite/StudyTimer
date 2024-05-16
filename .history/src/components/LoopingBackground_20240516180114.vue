<script setup>
import Van from '../assets/vehicles/shop/Van.png'
import TheGhost from '../assets/vehicles/shop/TheGhost.png'
</script>
<template>
  <div class="outerContainer">
    <img class="image foreground" :class="getStage" src="../assets/foreground.png" />
    <img class="image background" :class="getStage" src="../assets/background.png" />

    <img class="imageBackface" src="../assets/imageBackface.png" />
    <!-- update with working animations and play based on state -->
    <img
      class="vehicle"
      :src="
        (getEquippedVehicleName() == `Van` && Van) ||
        (getEquippedVehicleName() == `The Ghost` && TheGhost)
      "
      alt=""
    />
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
      console.log(this.vehicles.findIndex((v) => v.status === 'equipped'))
      console.log(this.vehicles[this.vehicles.findIndex((v) => v.status === 'equipped')].name)
      return this.stage
    }
  },
  methods: {
    getEquippedVehicleName() {
      const equippedVehicle = this.vehicles.findIndex((v) => v.status === 'equipped')
      return this.vehicles[equippedVehicle].name
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

.foreground {
  z-index: 3;
}
.background {
  z-index: 3;
}

.imageBackface {
  position: absolute;
  z-index: -1;
  height: 100vh;
  top: 0;
  left: 0;
  display: none;
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

@keyframes studyTimeForground {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
@keyframes studyTimeBackground {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
