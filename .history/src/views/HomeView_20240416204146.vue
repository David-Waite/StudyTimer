<template>
  <h1>Home</h1>
  <button @click="handleAddDummyName">Click me to add name</button>
  {{ auth }}
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
      const userRef = doc(this.db, 'users', 'user123')
      await setDoc(userRef, {
        name: 'John Doe',
        email: 'john@example.com'
        // Other user data
      })
    }
  },
  mounted() {
    this.auth = getAuth()
  }
}
</script>
<style></style>
