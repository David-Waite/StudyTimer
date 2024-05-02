<template>
  <h1>Home</h1>
  <button>Click me to add name</button>
</template>

<script>
import { doc, setDoc } from 'firebase/firestore'

// Example: Add data to a "users" collection
const userRef = doc(this.db, 'users', 'user123')
await setDoc(userRef, {
  name: 'John Doe',
  email: 'john@example.com'
  // Other user data
})
</script>

<style></style>
