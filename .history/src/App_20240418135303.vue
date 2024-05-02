<script setup>
import { RouterView } from 'vue-router'
import NavItem from './components/NavItem.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { usePomodoroSettingsStore } from './stores/settings'
</script>
<script>
export default {
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

<template>
  <NavItem />
  <RouterView />
</template>

<style scoped></style>
