<script setup>
import { BIconXLg } from 'bootstrap-icons-vue'
</script>

<script>
export default {
  props: {
    timeStudying: Number
  },
  data() {
    return {
      auth: '',
      open: true,
      vehicles: [
        {
          name: 'Van',
          price: 2000,
          src: 'Van.png'
        },
        {
          name: 'Van',
          price: 2000,
          src: 'Van.png'
        },
        {
          name: 'Van',
          price: 2000,
          src: 'Van.png'
        },
        {
          name: 'Van',
          price: 2000,
          src: 'Van.png'
        }
      ]
    }
  },
  methods: {
    close() {
      this.$router.push('/')
    }
  },
  computed() {},
  mounted() {}
}
</script>
<template>
  <div v-if="$route.name === `shop`" class="shopContainer">
    <h1>SHOP</h1>
    <div class="close" @click="close"><BIconXLg /></div>
    <h2>Pomodoro dollars: ${{ timeStudying }}</h2>
    <div class="vehicleGrid">
      <div class="vehicleContainer" v-for="(vehicle, index) in vehicles" v-bind:key="index">
        <img class="vehicleImage" src="../assets/vehicles/Van.png" alt="hi" />
        <h3 class="vehicleName">{{ vehicle.name }}</h3>
        <p class="vehiclePrice">{{ vehicle.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopContainer {
  border: 7px solid #551d1b;
  border-radius: 60px;
  position: absolute;
  position: absolute;
  top: calc(50% + 25px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95vw;
  height: calc(100vh - 100px);
  z-index: 2;
  background: rgb(41, 27, 17);

  padding: 60px;
}
.vehicleGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 80px;
}
.vehicleContainer {
  background-color: red;
  text-align: center;
  color: white;
}
.vehicleImage {
  width: 100%;
  object-fit: cover;
}
h1 {
  position: absolute;
  top: -10px;
  padding: 10px 20px 0px;
  border-radius: 50% 50% 0 0;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #d8c25a;
  background-color: #551d1b;
  font-size: 32px;
  margin-top: -20px;
}
h2 {
  font-size: 24px;
  color: #d8c25a;
}
.close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #d8c25a;
  cursor: pointer;
}
</style>
