<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { BIconShop, BIconGearFill, BIconInfoCircleFill } from 'bootstrap-icons-vue'
import InfoPopup from './InfoPopup.vue'
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
      userName: '',
      openHelp: false
    }
  },
  methods: {
    toggleOpen() {
      this.$router.push('/')
      this.openHelp = !this.openHelp
    },
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
  <InfoPopup :open="openHelp" :toggleOpen="toggleOpen" />
  <div class="navOuterContainer">
    <div class="navContainer" v-if="useRoute().path != '/login' && useRoute().path != '/signup'">
      <div>
        <RouterLink to="/">Welcome {{ userName }} </RouterLink>
        <RouterLink to="/shop"><BIconShop /></RouterLink>
      </div>
      <div class="rightNav">
        <RouterLink v-if="$route.name === `settings`" to="/"><BIconGearFill /></RouterLink>

        <RouterLink v-if="$route.name === `home` || $route.name === 'shop'" to="/settings"
          ><BIconGearFill /></RouterLink
        ><BIconInfoCircleFill @click="toggleOpen" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.navOuterContainer {
  position: absolute;
  top: 0;
  z-index: 3;
}

.navContainer {
  width: 100vw;
  background-color: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 70.5%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.navContainer div {
  display: flex;
  align-items: center;
  gap: 24px;
}
.rightNav {
  display: flex;
  align-items: unset !important;
}
.navContainer a {
  font-size: 20px;
  color: white;
  text-decoration: none;
}
.navContainer svg {
  font-size: 30px;
  color: white;
  cursor: pointer;
}

/* Rectangle 21 */
</style>
