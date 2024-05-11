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
  <div v-if="$route.name === `shop`" class="shopContainer"></div>
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
  height: 95vh;
  z-index: 2;
  background: rgb(41, 27, 17);

  padding: 60px 20px 10px;
}
</style>
