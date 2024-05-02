<script setup>
import { Firestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
</script>

<script>
export default {
  data() {
    return {
      userUid: getAuth().currentUser.uid
    }
  },
  methods: {
    writeUserData(userId, name, email, imageUrl) {
      firebase
        .database()
        .ref('users/' + userId)
        .set({
          username: name,
          email: email
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
