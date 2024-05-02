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
      const userRef = doc(this.db, 'users', this.auth.currentUser.uid)

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
    console.log(this.auth.currentUser.uid)
  }
}
</script>
<style></style>
