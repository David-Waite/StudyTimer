<script setup>
import { getAuth } from 'firebase/auth'
import { Database } from 'firebase/database'
import { Firestore } from 'firebase/firestore'
</script>
const db = firebase.firestore(); // Save user profile data function saveUserData(userId, name,
email, imageUrl) { db.collection('users').doc(userId).set({ username: name, email: email,
profileImageUrl: imageUrl, // Add other user data fields as needed }); }
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
      this.db.collection('users').doc(this.userUid).set({
        name: 'John'

        // Add other user data fields as needed
      })
    }
  }
}
</script>

<template>
  <h1>Home</h1>
  <button @click="handleClick">click me to add name</button>
</template>

<style></style>
