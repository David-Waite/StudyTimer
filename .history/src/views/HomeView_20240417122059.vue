<template>
  <h1>Home</h1>
  <TimerItem :startTime="pomodoroTime" />
  <button @click="handleAddDummyName">Click me add data</button>
  <button @click="givemeData">see data</button>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { doc, setDoc, getDoc } from 'firebase/firestore'
import db from '../main'
import TimerItem from '../components/TimerItem.vue'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      pomodoroTime: 35
    }
  },
  methods: {
    async givemeData() {
      const userDoc = await getDoc(doc(db, 'users', this.auth.currentUser.uid))
      if (userDoc.exists()) {
        const userData = userDoc.data()
        console.log('User data:', userData)
        this.clicked = userData.clicked
      }
    },
    async handleAddDummyName() {
      const userRef = doc(db, 'users', this.auth.currentUser.uid)
      // Example: Add user-specific data
      await setDoc(userRef, {
        name: 'John Doe',
        email: 'john@example.com'

        // Other user properties
      })
    }
  },
  computed() {},
  mounted() {
    this.auth = getAuth()

    onAuthStateChanged(this.auth, (user) => {
      if (!user) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
<style></style>
