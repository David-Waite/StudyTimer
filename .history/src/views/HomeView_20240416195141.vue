<script setup>
import { getAuth } from 'firebase/auth'
import { Firestore } from 'firebase/firestore'
</script>

<script>
export default {
  data() {
    return {
      userUid: getAuth().currentUser.uid,
      db: Firestore()
    }
  },
  methods: {
    writeUserData() {
      // Use update instead of set to add fields without overwriting existing data
      this.db.collection('users').doc(this.userUid).update({
        name: 'John'
        // Add other user data fields as needed
      })
    }
  }
}
</script>

<template>
  <h1>Home</h1>
  <button @click="writeUserData">Click me to add name</button>
</template>

<style></style>
