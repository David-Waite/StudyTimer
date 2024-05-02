<template>
  <h1>Home</h1>
  <button @click="handleAddDummyName">Click me to add name</button>
  <button @click="givemeData">Click me to add name</button>
</template>

<script setup>
import { getAuth } from 'firebase/auth'

import { doc, setDoc, getDoc } from 'firebase/firestore'
import db from '../main'
</script>

<script>
export default {
  data() {
    return {
      auth: ''
    }
  },
  methods: {
    async async givemeData() {
      const userDoc = await getDoc(doc(db, 'users', userUid)); if (userDoc.exists()) { const userData =
userDoc.data(); console.log('User data:', userData); } else { console.log('User not found.'); }
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
  mounted() {
    this.auth = getAuth()
  }
}
</script>
<style></style>
