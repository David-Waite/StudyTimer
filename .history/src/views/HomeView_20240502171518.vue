<template>
  <div class="container"><TimerItem /></div>

  <!-- <button @click="handleAddDummyName">Click me add data</button> -->
  <!-- <button @click="givemeData">see data</button> -->
</template>

<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import TimerItem from '../components/TimerItem.vue'

import { usePomodoroSettingsStore } from '@/stores/settings'
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
