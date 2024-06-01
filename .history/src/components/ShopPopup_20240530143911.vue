<script setup>
import { BIconXLg, BIconHandThumbsUp, BIconHandThumbsUpFill } from 'bootstrap-icons-vue'
import Van from '../assets/vehicles/shop/VanStill.png'
import TheGhost from '../assets/vehicles/shop/TheGhostStill.png'
import Paginate from 'vuejs-paginate-next'
</script>

<script>
export default {
  components: {
    Paginate
  },
  props: {
    timeStudying: Number,
    vehicles: Array,
    vehicleData: Object,
    buyVehicle: Function,
    equipVehicle: Function,
    likeVehicle: Function,
    userEmail: String
  },
  data() {
    return {
      page: 1,
      perPage: 1,
      auth: '',
      open: true
    }
  },
  methods: {
    close() {
      this.$router.push('/')
    },
    paginate(page) {
      this.page = page
    }
  },
  computed: {
    paginatedData() {
      const start = (this.page - 1) * this.perPage
      const end = start + this.perPage
      if (this.vehicles) {
        return this.vehicles.slice(start, end)
      }

      return { price: 0, name: 'Van', status: 'equipped' }
    }
  }
}
</script>
<template>
  <div v-if="$route.name === `shop`" class="shopContainer">
    <h1>SHOP</h1>

    <div class="close" @click="close"><BIconXLg /></div>
    <h2>Pomodoro dollars: ${{ timeStudying }}</h2>

    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Likes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vehicle, index) in paginatedData" :key="index">
            <td>
              <img
                class="vehicleImage"
                :src="(vehicle.name == `Van` && Van) || (vehicle.name == `The Ghost` && TheGhost)"
                alt="hi"
              />
            </td>
            <td>
              {{ vehicle.name }}
            </td>
            <td>
              <button class="buy btn" v-if="vehicle.status == 'buy'" @click="buyVehicle(vehicle)">
                ${{ vehicle.price }}
              </button>
              <button class="equiped btn" v-if="vehicle.status == 'equipped'">Equipped</button>
              <button
                class="equip btn"
                v-if="vehicle.status == 'equip'"
                @click="equipVehicle(vehicle)"
              >
                Equip
              </button>
            </td>
            <td>
              <div class="like">
                <p v-if="vehicleData">
                  <BIconHandThumbsUp
                    v-if="
                      !vehicleData
                        .find((vehicles) => vehicles.name === vehicle.name)
                        .likes.find((email) => email === userEmail)
                    "
                    @click="likeVehicle(vehicle)"
                  />
                  <BIconHandThumbsUpFill
                    v-if="
                      vehicleData
                        .find((vehicles) => vehicles.name === vehicle.name)
                        .likes.find((email) => email === userEmail)
                    "
                    @click="likeVehicle(vehicle)"
                  />{{
                    vehicleData.find((vehicles) => vehicles.name === vehicle.name).likes.length
                  }}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <paginate
        v-if="vehicles"
        :page-count="Math.ceil(vehicles.length / perPage)"
        :click-handler="paginate"
        :prev-text="'Prev Page'"
        :next-text="'Next Page'"
        :container-class="'pagination'"
      ></paginate>
    </div>
  </div>
</template>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';
.like {
  display: flex;
  align-content: center;
  background-color: red;
}
.like svg {
  cursor: pointer;
}
.table {
  overflow-y: scroll;
  height: calc(100% - 40px);
}
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
  z-index: 4;
  background: rgb(41, 27, 17);

  padding: 60px;
}
.btn {
  border-radius: 50px;
  font-weight: 800;
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 10px;
}
.buy {
  background-color: #d8c25a;
  color: #551d1b;
}
.equip {
  color: #d8c25a;
  background-color: #551d1b;
}
.equiped {
  color: #291b11;
  background-color: #fff8db;
  cursor: default;
}
.buy:hover {
  background-color: #c6b353;
}
.equip:hover {
  background-color: #3e1614;
}

.vehicleGrid {
  margin-top: 40px;

  overflow-y: scroll;
  height: calc(100% - 40px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 80px;
  scrollbar-color: #d8c25a rgb(41, 27, 17);
  scrollbar-width: thin;
}

.vehicleContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;

  text-align: center;
}
.vehicleName {
  color: white;
}
.vehiclePrice {
  color: #d8c25a;
  font-weight: 800;
}
.vehicleImage {
  height: 100px;
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

@media (max-width: 1200px) {
  .vehicleGrid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 80px;
  }
}

@media (max-width: 1000px) {
  .vehicleGrid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 800px) {
  .vehicleGrid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .shopContainer {
    top: 55%;
    height: 80vh;
  }
}

@media (max-width: 600px) {
  .vehicleGrid {
    grid-template-columns: 1fr;
    gap: 40px;
    height: calc(100% - 100px);
  }
  .shopContainer {
    padding: 60px 10px 10px;
  }
  .btn {
    font-size: 16px;
  }
}
</style>
