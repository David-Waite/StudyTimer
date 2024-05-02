<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { BIconShop, BIconGearFill } from 'bootstrap-icons-vue'

import router from '@/router'
import { doc, getDoc } from 'firebase/firestore'
import db from '@/main'
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      isLoggedIn: false,
      userName: ''
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

    onAuthStateChanged(this.auth, async (user) => {
      if (!user) {
        this.$router.push('/login')
        return
      }
      console.log(await getDoc(doc(db, 'users', this.auth.currentUser.uid)).data)
    })
  }
}
</script>

<template>
  <div class="navContainer" v-if="useRoute().path != '/login' && useRoute().path != '/signup'">
    <RouterLink to="/">Welcome {{ userName }} </RouterLink>
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
  color: black;
}
</style>
