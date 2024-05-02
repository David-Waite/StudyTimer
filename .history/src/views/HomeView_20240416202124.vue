<template>
  <h1>Home</h1>
  <button @click="handleSignOut">Click me to add name</button>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth'

import { doc, setDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      db: getFirestore(app)
    }
  },
  methods: {
    async handleSignOut() {
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
