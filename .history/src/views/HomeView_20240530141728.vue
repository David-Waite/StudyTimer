<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import TimerItem from '../components/TimerItem.vue'
import SettingsPopup from '@/components/SettingsPopup.vue'
import LoopingBackground from '@/components/LoopingBackground.vue'
import ShopPopup from '@/components/ShopPopup.vue'

import { doc, getDoc, updateDoc } from 'firebase/firestore'
import db from '@/main'
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      currentUserDocRef: null,
      userData: null,
      vehicleData: null,
      stage: 'start'
    }
  },
  methods: {
    async fetchUser(user) {
      if (user) {
        const vehiclesSnapshot = await getDoc(doc(db, 'vehicles', 'nuafCZUEWigEf4DpiZ3p'))
        const vehiclesData = vehiclesSnapshot.data()
        this.vehicleData = vehiclesData['List']

        const userDoc = await getDoc(doc(db, 'users', user.uid))

        const userData = userDoc.data()
        if (userDoc.exists()) {
          this.userData = userData
          this.currentUserDocRef = doc(db, 'users', this.auth.currentUser.uid)
          console.log(userData)
          let vechiclesToBeAdded = userData.vehiclesOwned
          if (userData.vehiclesOwned.length != vehiclesData.List.length) {
            for (let vehicle of vehiclesData.List) {
              let isVehicleOwned = userData.vehiclesOwned.some(
                (userVehicle) => userVehicle.name === vehicle.name
              )

              if (!isVehicleOwned) {
                vechiclesToBeAdded.push({
                  name: vehicle.name,
                  price: vehicle.price,
                  status: 'buy'
                })
              }
            }
            console.log(vechiclesToBeAdded)

            await updateDoc(this.currentUserDocRef, { vehiclesOwned: vechiclesToBeAdded })
          }
        }
      }
    },
    updateStage(newStage) {
      this.stage = newStage
    },
    async updateTimeStudying() {
      const timeStudying =
        Number(this.userData.timeStudying) + Number(this.userData.settings.pomodoroTime * 60)

      await updateDoc(this.currentUserDocRef, { timeStudying: timeStudying })
      this.fetchUser(this.auth.currentUser)
    },
    async buyVehicle(vehicle) {
      if (this.userData.timeStudying >= vehicle.price) {
        const vehicleIndex = this.userData.vehiclesOwned.findIndex(
          (v) => v.name === vehicle.name && v.price === vehicle.price
        )
        if (vehicleIndex !== -1) {
          this.userData.vehiclesOwned[vehicleIndex].status = 'equip'
          await updateDoc(this.currentUserDocRef, {
            vehiclesOwned: this.userData.vehiclesOwned,
            timeStudying: this.userData.timeStudying - vehicle.price
          })
        }

        this.fetchUser(this.auth.currentUser)
      }
    },
    async likeVechicle(vehicle) {
      console.log(vehicle)
      console.log(this.userData.email)
      const vehiclesSnapshot = await getDoc(doc(db, 'vehicles', 'nuafCZUEWigEf4DpiZ3p'))
      const vehiclesData = vehiclesSnapshot.data()
    },
    async equipVehicle(vehicle) {
      const vehicleToUnequip = this.userData.vehiclesOwned.findIndex((v) => v.status === 'equipped')

      const vehicleToEquip = this.userData.vehiclesOwned.findIndex((v) => v.name === vehicle.name)

      this.userData.vehiclesOwned[vehicleToUnequip].status = 'equip'
      this.userData.vehiclesOwned[vehicleToEquip].status = 'equipped'
      await updateDoc(this.currentUserDocRef, {
        vehiclesOwned: this.userData.vehiclesOwned
      })
    }
  },
  computed() {},

  watch: {
    userData: function (userData) {
      this.userData = userData
    }
  },
  mounted() {
    this.auth = getAuth()
    onAuthStateChanged(this.auth, (user) => {
      if (!user) {
        this.$router.push('/login')
        return
      }
      this.fetchUser(user)
    })
  }
}
</script>

<template>
  <div class="container">
    <LoopingBackground v-if="userData" :stage="stage" :vehicles="userData.vehiclesOwned" />
    <div class="timerContainer">
      <TimerItem
        v-if="userData"
        :stage="stage"
        :settings="userData.settings"
        :auth="auth"
        @updateTimeStudying="updateTimeStudying"
        @updateStage="updateStage"
      />
    </div>
    <SettingsPopup
      v-if="userData"
      :auth="auth"
      :settings="
        userData && {
          pomodoroTime: userData.settings.pomodoroTime,
          shortRest: userData.settings.shortRest,
          longRest: userData.settings.longRest,
          pomodoroTillLongRest: userData.settings.pomodoroTillLongRest
        }
      "
    />
    <ShopPopup
      :buyVehicle="buyVehicle"
      :equipVehicle="equipVehicle"
      :vehicleData="vehicleData"
      :likeVechicle="likeVechicle"
      :timeStudying="userData && userData.timeStudying"
      :vehicles="userData && userData.vehiclesOwned"
    />
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.timerContainer {
  position: absolute;
  z-index: 2;
  top: 8vh;
  padding: 50px;
}
</style>
