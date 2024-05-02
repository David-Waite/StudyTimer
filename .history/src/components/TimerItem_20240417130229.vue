<template>
  <div>
    <p>Countdown: {{ formattedTime }}</p>
    <button @click="timer.playTimer">Start Timer</button>
    <button @click="timer.pauseTimer">Pause Timer</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTimerStore } from '@/stores/timer.js' // Adjust the path accordingly

const timer = useTimerStore()

const formattedTime = computed(() => {
  const minutes = Math.floor(timer.timerCount / 60)
  const seconds = timer.timerCount % 60
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})

// Initialize the timer when the component is created
timer.countDownTimer()
</script>

<script>
export default {
  computed: {
    formattedTime: () => {
      const minutes = Math.floor(timer.timerCount / 60)
      const seconds = timer.timerCount % 60
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
  },
  mounted() {
    timer.countDownTimer()
  }
}
</script>
export default { data() { return { auth: '' } }, methods: { async givemeData() { const userDoc =
await getDoc(doc(db, 'users', this.auth.currentUser.uid)) if (userDoc.exists()) { const userData =
userDoc.data() console.log('User data:', userData) this.clicked = userData.clicked } }, async
handleAddDummyName() { const userRef = doc(db, 'users', this.auth.currentUser.uid) // Example: Add
user-specific data await setDoc(userRef, { name: 'John Doe', email: 'john@example.com' // Other user
properties }) } }, computed() {}, mounted() { this.auth = getAuth() onAuthStateChanged(this.auth,
(user) => { if (!user) { this.$router.push('/login') } }) } }
