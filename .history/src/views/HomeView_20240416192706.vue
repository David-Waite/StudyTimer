<script setup>
import { auth } from '@/firebase'
import { Firestore } from 'firebase/firestore'
</script>

<script>
export default {
  data() {
    return {
      userUid : auth().currentUser.uid,
 db : Firestore()

    }
  },
  methods: {
    handleClick(){
      db.collection('users').doc(userUid).set({
  name: 'John Doe',
  email: 'john@example.com'
  // Add other properties as needed
})
    }









  }
</script>

<template>
  <h1>Home</h1>
  <button @click="handleClick">click me to add name</button>
</template>

<style></style>
