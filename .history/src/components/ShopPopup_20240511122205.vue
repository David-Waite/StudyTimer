<script setup>
import { usePomodoroSettingsStore } from '@/stores/settings'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
    closeSettings() {
      console.log('closing')
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
      settings.init()
    })
  }
}
</script>
<template>
  <div v-if="$route.name === `shop`" class="shopContainer"><h1>SHOP</h1></div>
</template>

<style scoped>
.shopContainer {
  border: 7px solid #551d1b;
  border-radius: 60px;
  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95vw;
  height: 90vh;
  z-index: 2;
  background: rgb(41, 27, 17);

  padding: 60px 20px 10px;
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
</style>
