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
    handleClick() {
      // this.db.collection('users').doc(this.userUid).set({
      //   name: 'John Doe'

      //   // Add other properties as needed
      // })
      console.log(this.userUid)
    }
  }
}
</script>

<template>
  <h1>Home</h1>
  <button @click="handleClick">click me to add name</button>
</template>

<style></style>
