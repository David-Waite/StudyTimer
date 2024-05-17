<script setup>
import VanMoving from '../assets/vehicles/shop/vanMoving.gif'
import VanStill from '../assets/vehicles/shop/vanStill.gif'

import TheGhost from '../assets/vehicles/shop/TheGhost.png'
</script>
<template>
  <div class="outerContainer">
    <img class="image background" :class="getStage" src="../assets/background.png" />

    <img class="image foreground" :class="getStage" src="../assets/foreground.png" />

    <img class="imageBackface" src="../assets/imageBackface.png" />
    <!-- update with working animations and play based on state -->
    <img
      class="vehicle vehicleMoving"
      :src="
        (getEquippedVehicleName() == `Van` && VanMoving) ||
        (getEquippedVehicleName() == `The Ghost` && TheGhost)
      "
      alt=""
    />
    <img
      v-if="stage === 'paused' || stage === 'start'"
      class="vehicle"
      :src="
        (getEquippedVehicleName() == `Van` && VanStill) ||
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
.outerContainer {
  display: flex;
}
.vehicle {
  position: absolute;
  left: 0;
  top: 45vh;
  height: 40vh;
  left: 50vw;
  transform: translateX(-50%);
}

.foreground {
  animation: studyTimeForeground 9s linear infinite;
  transform: translateX(-100%);
  position: relative;
  z-index: 1;
  top: 0;
}
.background {
  animation: studyTimeBackground 9s linear infinite;
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

@keyframes studyTimeForeground {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(-150%);
  }
}
@keyframes studyTimeBackground {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
