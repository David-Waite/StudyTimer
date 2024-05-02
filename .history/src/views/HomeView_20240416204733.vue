<template>
  <h1>Home</h1>
  <button @click="handleAddDummyName">Click me to add name</button>
</template>

<script setup>
import { getAuth } from 'firebase/auth'

import { doc, setDoc } from 'firebase/firestore'
</script>

<script>
export default {
  data() {
    return {
      auth: ''
    }
  },
  methods: {
    async handleAddDummyName() {
      const userUid = 'user-uid' // Replace with the actual user UID
      const userRef = doc(db, 'users', userUid)

      // Example: Add user-specific data
      await setDoc(userRef, {
        name: 'John Doe',
        email: 'john@example.com'
        // Other user properties
      })
    }
  },
  mounted() {
    this.auth = getAuth()
    console.log(this.auth.currentUser)
  }
}
</script>
<style></style>
