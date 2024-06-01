<script setup>
import { BIconXLg } from 'bootstrap-icons-vue'
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
    buyVehicle: Function,
    equipVehicle: Function
  },
  data() {
    return {
      page: 1,
      perPage: 1,
      auth: '',
      open: true,
      studentMarks: [
        { name: 'David', mark: 97 },
        { name: 'Cassie', mark: 98 },
        { name: 'Tom', mark: 90 },
        { name: 'Jake', mark: 43 },
        { name: 'Emily', mark: 2 },
        { name: 'Alex', mark: 52 },
        { name: 'Hannah', mark: 19 },
        { name: 'Bean', mark: 56 },
        { name: 'Luke', mark: 48 },
        { name: 'Novia', mark: 27 },
        { name: 'Narla', mark: 92 },
        { name: 'Charlie', mark: 34 },
        { name: 'Georgie', mark: 66 },
        { name: 'Dav', mark: 98 },
        { name: 'Susan', mark: 82 },
        { name: 'Heather', mark: 40 },
        { name: 'Daniel', mark: 30 },
        { name: 'Kenau', mark: 13 },
        { name: 'Amber', mark: 10 },
        { name: 'Sophie', mark: 3 },
        { name: 'Noah', mark: 72 },
        { name: 'Nic', mark: 23 },
        { name: 'Grace', mark: 26 },
        { name: 'Robert', mark: 82 },
        { name: 'Gabbie', mark: 100 }
      ]
    }
  },
  methods: {
    close() {
      this.$router.push('/')
    },
    paginate(page) {
      this.page = page
      console.log('gu')
    }
  },
  computed: {
    paginatedData() {
      const start = (this.page - 1) * this.perPage
      const end = start + this.perPage
      return this.studentMarks.slice(start, end)
    }
  }
}
</script>
<template>
  <div v-if="$route.name === `shop`" class="shopContainer">
    <h1>SHOP</h1>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Mark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in paginatedData" :key="index">
            <td>{{ student.name }}</td>
            <td>{{ student.mark }}</td>
          </tr>
        </tbody>
      </table>

      <paginate
        :page-count="Math.ceil(25 / 3)"
        :click-handler="paginate"
        :prev-text="'Prev Page'"
        :next-text="'Next Page'"
        :container-class="'pagination'"
      ></paginate>
    </div>
    <div class="close" @click="close"><BIconXLg /></div>
    <h2>Pomodoro dollars: ${{ timeStudying }}</h2>

    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vehicle, index) in vehicles" :key="index">
            <td>{{ vehicle.name }}</td>
            <td>
              <img
                class="vehicleImage"
                :src="(vehicle.name == `Van` && Van) || (vehicle.name == `The Ghost` && TheGhost)"
                alt="hi"
              />
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
          </tr>
        </tbody>
      </table>

      <paginate
        :page-count="Math.ceil(25 / 3)"
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
