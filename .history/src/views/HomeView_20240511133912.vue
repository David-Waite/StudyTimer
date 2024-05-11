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
