<script setup>
import VanMoving from '../assets/vehicles/shop/vanMoving.gif'
import VanStill from '../assets/vehicles/shop/VanStill.png'

import TheGhostMoving from '../assets/vehicles/shop/TheGhostMoving.gif'
import TheGhostStill from '../assets/vehicles/shop/TheGhostStill.png'
</script>
<template>
  <div class="outerContainer">
    <img
      class="image background"
      :class="getStage"
      src="../assets/background.png"
      alt="image background"
    />

    <img
      class="image foreground"
      :class="getStage"
      src="../assets/foreground.png"
      alt="image forground"
    />

    <img class="imageBackface" src="../assets/imageBackface.png" alt="imageBackface" />

    <img
      class="vehicle"
      :class="stage != 'running' && 'vehicleMoving'"
      :src="
        (getEquippedVehicleName() == `Van` && VanMoving) ||
        (getEquippedVehicleName() == `The Ghost` && TheGhostMoving)
      "
      :alt="getEquippedVehicleName()"
    />
    <img
      v-if="stage === 'paused' || stage === 'start'"
      class="vehicle"
      :src="
        (getEquippedVehicleName() == `Van` && VanStill) ||
        (getEquippedVehicleName() == `The Ghost` && TheGhostStill)
      "
      :alt="getEquippedVehicleName()"
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
.vehicleMoving {
  height: 30vh;
  top: 50vh;
  display: none;
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
  animation-play-state: paused;
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
