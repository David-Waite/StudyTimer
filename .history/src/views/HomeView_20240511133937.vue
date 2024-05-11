<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import TimerItem from '../components/TimerItem.vue'
import SettingsPopup from '@/components/SettingsPopup.vue'
import { usePomodoroSettingsStore } from '@/stores/settings'
import LoopingBackground from '@/components/LoopingBackground.vue'
import ShopPopup from '@/components/ShopPopup.vue'
import { useFirebaseDataStore } from '@/stores/firebaseData'
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      fireBaseDataStore: useFirebaseDataStore()
    }
  },
  methods: {},
  computed() {},

  watch: {
    'timerStore.time': function (newTime) {
      let rawTimeFraction = newTime / this.timerStore.startingTime

      rawTimeFraction = rawTimeFraction - (1 / this.timerStore.startingTime) * (1 - rawTimeFraction)

      this.strokeDashArray = `${(rawTimeFraction * 283).toFixed(0)} 283`
    }
  },
  mounted() {
    const firebaseData = useFirebaseDataStore()

    this.auth = getAuth()

    const settings = usePomodoroSettingsStore()

    onAuthStateChanged(this.auth, (user) => {
      if (!user) {
        this.$router.push('/login')
        return
      }
      firebaseData.fetchUser(user)
      this.userData = firebaseData.userData

      settings.init()
      console.log(this.userData)
    })
  }
}
</script>

<template>
  <div class="container">
    <LoopingBackground />
    <div class="timerContainer"><TimerItem /></div>
    <SettingsPopup />

    <ShopPopup :timeStudying="userData" />
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
