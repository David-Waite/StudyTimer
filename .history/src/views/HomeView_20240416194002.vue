<script setup>
import { Firestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { database } from 'firebase/database'
</script>

<script>
export default {
  data() {
    return {
      userUid: getAuth().currentUser.uid
    }
  },
  methods: {
    writeUserData() {
      database()
        .ref('users/' + this.userId)
        .set({
          name: 'john'

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
