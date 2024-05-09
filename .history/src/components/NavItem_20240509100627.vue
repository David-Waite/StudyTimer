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
      const userDoc = await getDoc(doc(db, 'users', this.auth.currentUser.uid))
      if (userDoc.exists()) {
        const userData = userDoc.data()
        this.userName = userData.username
      }
    })
  }
}
</script>

<template>
  <div class="navOuterContainer">
    <div class="navContainer" v-if="useRoute().path != '/login' && useRoute().path != '/signup'">
      <div>
        <RouterLink to="/">Welcome {{ userName }} </RouterLink>
        <RouterLink to="/shop"><BIconShop /></RouterLink>
      </div>

      <RouterLink to="/settings"><BIconGearFill /></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.navOuterContainer {
  position: absolute;
  top: 0;
  z-index: 2;
}
.navContainer {
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.navContainer div {
  display: flex;
  align-items: center;
  gap: 24px;
}
.navContainer a {
  font-size: 20px;
  color: black;
  text-decoration: none;
}
.navContainer svg {
  font-size: 30px;
  color: black;
}
</style>
