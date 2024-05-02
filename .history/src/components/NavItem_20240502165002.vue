<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { BIconShop, BIconGearFill } from 'bootstrap-icons-vue'

import router from '@/router'
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      isLoggedIn: false
    }
  },
  methods: {
    handleSignOut() {
      signOut(this.auth)
      router.push('/signup')
    }
  },
  mounted() {
    this.auth = getAuth()

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  }
}
</script>

<template>
  <div class="navContainer" v-if="useRoute().path != '/login' && useRoute().path != '/signup'">
    <RouterLink to="/shop"><BIconShop /></RouterLink>
    <RouterLink to="/settings"><BIconGearFill /></RouterLink>
  </div>
</template>

<style scoped>
.navContainer {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.navContainer svg {
  font-size: 30px;
}
</style>
