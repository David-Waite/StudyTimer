<template>
  <div class="container">
    <LoopingBackground />
    <div class="timerContainer"><TimerItem /></div>
  </div>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import TimerItem from '../components/TimerItem.vue'

import { usePomodoroSettingsStore } from '@/stores/settings'
import LoopingBackground from '@/components/LoopingBackground.vue'
</script>

<script>
export default {
  data() {
    return {
      auth: ''
    }
  },
  methods: {
    // async givemeData() {
    //   const userDoc = await getDoc(doc(db, 'users', this.auth.currentUser.uid))
    //   if (userDoc.exists()) {
    //     const userData = userDoc.data()
    //     console.log('User data:', userData)
    //     this.clicked = userData.clicked
    //   }
    // }
    // async handleAddDummyName() {
    //   const userRef = doc(db, 'users', this.auth.currentUser.uid)
    //   // Example: Add user-specific data
    //   await setDoc(userRef, {
    //     name: 'John Doe',
    //     email: 'john@example.com'
    //     // Other user properties
    //   })
    // }
  },
  computed() {},
  mounted() {
    this.auth = getAuth()

    const settings = usePomodoroSettingsStore()

    onAuthStateChanged(this.auth, (user) => {
      if (!user) {
        this.$router.push('/login')
        return
      }
      settings.init()
    })
  }
}
</script>
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
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
