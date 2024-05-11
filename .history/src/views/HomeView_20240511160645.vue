<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import TimerItem from '../components/TimerItem.vue'
import SettingsPopup from '@/components/SettingsPopup.vue'
import LoopingBackground from '@/components/LoopingBackground.vue'
import ShopPopup from '@/components/ShopPopup.vue'

import { doc, getDoc } from 'firebase/firestore'
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
        const userDoc = await getDoc(doc(db, 'users', user.uid))
        const userData = userDoc.data()
        if (userDoc.exists()) {
          console.log(userData)
          this.userData = userData
        }
      }
    },
    updateStage(newStage) {
      console.log('hi')
      this.stage = newStage
    },
    updateTimeStudying() {const userDoc = await getDoc(doc(db, 'users', this.auth.currentUser.uid)) const userData =
userDoc.data() const timeStudying = userData.timeStudying const washingtonRef = doc(db, 'users',
this.auth.currentUser.uid) await updateDoc(washingtonRef, { timeStudying: timeStudying +
this.pomodoroTime })}
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
