<template>
  <h1>Home</h1>
  <button @click="writeUserData">Click me to add name</button>
</template>

<script>
import { getAuth } from 'firebase/auth'
import { Firestore } from 'firebase/firestore' // Make sure to import Firestore

export default {
  data() {
    return {
      userUid: getAuth().currentUser.uid,
      db: new Firestore() // Initialize Firestore using 'new'
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

<style></style>
