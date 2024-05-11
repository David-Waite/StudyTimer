<script setup>
import { usePomodoroSettingsStore } from '@/stores/settings'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDoc } from 'firebase/firestore'

import { BIconXLg } from 'bootstrap-icons-vue'

const settings = usePomodoroSettingsStore()
settings.init()
</script>

<script>
export default {
  data() {
    return {
      auth: '',
      open: true
    }
  },
  methods: {
    close() {
      this.$router.push('/')
    }
  },
  computed() {},
  mounted() {
    //might not need this have a proper check
    this.auth = getAuth()

    const settings = usePomodoroSettingsStore()

    onAuthStateChanged(this.auth, (user) => {
      if (!user) {
        this.$router.push('/login')
        return
      }
      const userDoc = getDoc(doc(db, 'users', user.uid))
      const userData = userDoc.data()
      settings.init()
      console.log(user)
    })
  }
}
</script>
<template>
  <div v-if="$route.name === `shop`" class="shopContainer">
    <h1>SHOP</h1>
    <div class="close" @click="close"><BIconXLg /></div>
    <h2>Pomodoro dollars: $74832</h2>
  </div>
</template>

<style scoped>
.shopContainer {
  border: 7px solid #551d1b;
  border-radius: 60px;
  position: absolute;
  position: absolute;
  top: calc(50% + 25px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95vw;
  height: calc(100vh - 100px);
  z-index: 2;
  background: rgb(41, 27, 17);

  padding: 60px;
}
h1 {
  position: absolute;
  top: -10px;
  padding: 10px 20px 0px;
  border-radius: 50% 50% 0 0;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #d8c25a;
  background-color: #551d1b;
  font-size: 32px;
  margin-top: -20px;
}
h2 {
  font-size: 24px;
  color: #d8c25a;
}
.close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #d8c25a;
  cursor: pointer;
}
</style>
