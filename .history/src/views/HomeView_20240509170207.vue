<template>
  <div class="container">
    <LoopingBackground />
    <div class="timerContainer"><TimerItem /></div>
    <dialog></dialog>
  </div>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import TimerItem from '../components/TimerItem.vue'

import { usePomodoroSettingsStore } from '@/stores/settings'
import LoopingBackground from '@/components/LoopingBackground.vue'
</script>

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
<style scoped>
.container {
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.timerContainer {
  position: absolute;
  top: 10vh;
  padding: 50px;
}
</style>
