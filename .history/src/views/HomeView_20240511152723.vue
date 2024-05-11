<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import TimerItem from '../components/TimerItem.vue'
import SettingsPopup from '@/components/SettingsPopup.vue'
import LoopingBackground from '@/components/LoopingBackground.vue'
import ShopPopup from '@/components/ShopPopup.vue'
import { useFirebaseDataStore } from '@/stores/firebaseData'
import { getDoc } from 'firebase/firestore'
import db from '@/main'
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      fireBaseDataStore: useFirebaseDataStore(),
      userData: null
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
    }
  },
  computed() {},

  watch: {
    userData: function (userData) {
      this.userData = userData
    }
  },
  mounted() {
    const firebaseData = useFirebaseDataStore()
    this.auth = getAuth()
    onAuthStateChanged(this.auth, (user) => {
      if (!user) {
        this.$router.push('/login')
        return
      }
      firebaseData.fetchUser(user)
    })
  }
}
</script>

<template>
  <div class="container">
    <LoopingBackground />
    <div class="timerContainer"><TimerItem /></div>
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
