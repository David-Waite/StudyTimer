<script setup>
import { RouterLink } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
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
  methods: {},
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
