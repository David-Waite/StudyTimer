<script setup>
import { usePomodoroSettingsStore } from '@/stores/settings'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router'
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
    handleSignOut() {
      signOut(this.auth)
      router.push('/signup')
    },
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
  <div v-if="$route.name === `settings`" class="settings">
    <h1>SETTINGS</h1>

    <div class="close" @click="closeSettings"><BIconXLg /></div>

    <form @submit.prevent="settings.updateSettings()">
      <div class="formContent">
        <label for="pomodoroTime">Study</label>
        <input
          v-model="settings.settings.pomodoroTime"
          type="number"
          id="pomodoroTime"
          step="0.01"
        />

        <label for="shortRest">Short rest</label>
        <input v-model="settings.settings.shortRest" type="number" id="shortRest" step="0.01" />

        <label for="longRest">Long rest</label>
        <input v-model="settings.settings.longRest" type="number" id="longRest" step="0.01" />

        <label for="longRest">Study till Long Rest</label>
        <input
          v-model="settings.settings.pomodoroTillLongRest"
          type="number"
          id="pomodoroTillLongRest"
          step="0.01"
        />
      </div>
      <button class="saveChangesButton" type="submit">Save changes</button>
    </form>
    <h2>Updating settings will cause the page to reload and timer to be refreshed</h2>
    <button class="logoutBtn" @click="handleSignOut">SIGN OUT</button>
  </div>
</template>

<style scoped>
.settings {
  border: 7px solid #551d1b;
  border-radius: 60px;
  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  z-index: 2;
  background: rgba(41, 27, 17, 0.99);
  backdrop-filter: blur(5px);
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
h2 {
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: 500;
}
.saveChangesButton {
  margin: 20px auto 10px;
  background-color: #551d1b;
  padding: 8px 25px;
  color: #d8c25a;
  border-radius: 50px;
  border: none;
}
.close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #d8c25a;
  cursor: pointer;
}
.logoutBtn {
  position: absolute;
  bottom: -85px;
  padding: 0px 20px 10px;
  border-radius: 0 0 50% 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #d8c25a;
  background-color: #551d1b;
  font-size: 32px;
  margin-top: -20px;
  border: none;
}

.logoutBtn,
.saveChangesButton {
  cursor: pointer;
}

.logoutBtn:hover,
.saveChangesButton:hover {
  background-color: #3d1514;
}

.close:hover {
  color: #c0ae50;
}

.formContent {
  display: grid;
  grid-template-columns: 1fr 70px;
  row-gap: 30px;
  align-items: center;
}

label {
  color: white;
}
input {
  background-color: transparent;
  color: white;
  border-radius: 5px;
}
</style>
