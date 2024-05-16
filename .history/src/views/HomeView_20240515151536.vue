<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import TimerItem from '../components/TimerItem.vue'
import SettingsPopup from '@/components/SettingsPopup.vue'
import LoopingBackground from '@/components/LoopingBackground.vue'
import ShopPopup from '@/components/ShopPopup.vue'
import { collection, getDocs } from 'firebase/firestore'

import { doc, getDoc, updateDoc } from 'firebase/firestore'
import db from '@/main'
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      userData: null,
      stage: 'start'
    }
  },
  methods: {
    async fetchUser(user) {
      if (user) {
        //getting vehicles data
        // const vehiclesCollectionRef = collection(db, 'vehicles')

        // Get all documents in the 'vehicles' collection
        const vehiclesSnapshot = await getDoc(doc(db, 'vehicles', 'nuafCZUEWigEf4DpiZ3p'))
        const vehiclesData = vehiclesSnapshot.data()

        const userDoc = await getDoc(doc(db, 'users', user.uid))

        const userData = userDoc.data()
        if (userDoc.exists()) {
          this.userData = userData
          console.log(userData)

          console.log(userData.vehiclesOwned)
          let vechiclesToBeAdded = []
          if (userData.vehiclesOwned.length != vehiclesData.List.length) {
            console.log('new vehicle')[
              {
                name: 'Van',
                status: 'equiped',
                price: 25
              }
            ]
            // console.log('empty')
            // console.log(vehiclesSnapshot.data())
            // console.log('here')
            // const washingtonRef = doc(db, 'users', this.auth.currentUser.uid)
            // await updateDoc(washingtonRef, { vehiclesOwned: [] })
          }
        }
      }
    },
    updateStage(newStage) {
      this.stage = newStage
    },
    async updateTimeStudying() {
      // const userDoc = await getDoc(doc(db, 'users', this.auth.currentUser.uid))
      // const userData = userDoc.data()
      const timeStudying =
        Number(this.userData.timeStudying) + Number(this.userData.settings.pomodoroTime * 60)
      const washingtonRef = doc(db, 'users', this.auth.currentUser.uid)
      await updateDoc(washingtonRef, { timeStudying: timeStudying })
      this.fetchUser(this.auth.currentUser)
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
    <LoopingBackground :stage="stage" />
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
    <ShopPopup :timeStudying="userData && userData.timeStudying" />
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
  top: 10vh;
  padding: 50px;
}
</style>
