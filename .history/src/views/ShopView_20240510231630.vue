<script setup>
import { RouterLink } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
</script>

<template>
  <h1>shop</h1>
  <RouterLink to="/">home</RouterLink>
  <div v-for="(item, index) in itemsArray">
    <h1>h1 {{ (item, index) }}</h1>
  </div>
  <EDIT @click="edititem(index)" /><TRASHICON @click="trash(index)" /> <DOTICON />
  <p>> <button @click="save">save</button> : item</p>
  <p />
</template>
<script>
export default {
  data() {
    return {
      auth: '',
      itemsArray: ['hi'],
      itemToAdd: '',
      itemToUpdate: ''
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

    onAuthStateChanged(this.auth, (user) => {
      if (!user) {
        this.$router.push('/login')
        return
      }
    })
  }
}
</script>
<style></style>
