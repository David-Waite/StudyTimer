<script setup>
import { getAuth } from 'firebase/auth'
import { Database } from 'firebase/database'
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
