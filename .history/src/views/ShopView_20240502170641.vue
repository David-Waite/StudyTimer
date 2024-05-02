<script setup>
import { RouterLink } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import db from '@/main'
</script>

<template>
  <h1>shop</h1>
  <RouterLink to="/">home</RouterLink>
</template>
<script>
export default {
  data() {
    return {
      auth: ''
    }
  },
  methods: {
    // async givemeData() {
    //   const userDoc = await getDoc(doc(db, 'users', this.auth.currentUser.uid))
    //   if (userDoc.exists()) {
    //     const userData = userDoc.data()
    //     console.log('User data:', userData)
    //     this.clicked = userData.clicked
    //   }
    // }
    // async handleAddDummyName() {
    //   const userRef = doc(db, 'users', this.auth.currentUser.uid)
    //   // Example: Add user-specific data
    //   await setDoc(userRef, {
    //     name: 'John Doe',
    //     email: 'john@example.com'
    //     // Other user properties
    //   })
    // }
  },
  computed() {},
  mounted() {
    this.auth = getAuth()

    onAuthStateChanged(this.auth, async (user) => {
      if (!user) {
        this.$router.push('/login')
        return
      }
      console.log(await getDoc(doc(db, 'users', this.auth.currentUser.uid)))
    })
  }
}
</script>
<style></style>
