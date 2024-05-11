<script setup>
import { usePomodoroSettingsStore } from '@/stores/settings'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router'
import { BIconXLg } from 'bootstrap-icons-vue'
import { set } from 'firebase/database'
const settings = usePomodoroSettingsStore()
</script>

<script>
export default {
  props: {
    settings: Object
  },
  data() {
    return {
      auth: '',
      open: true,
      settingsInput: {
        pomodoroTime: this.settings.target.settings,
        shortRest: 0.1,
        longRest: 30,
        pomodoroTillLongRest: 4
      }
    }
  },
  methods: {
    handleSignOut() {
      signOut(this.auth)
      router.push('/signup')
    },
    closeSettings() {
      console.log(this.settings)
      // this.$router.push('/')
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
    {{ settings.settings }}

    <div class="close" @click="closeSettings"><BIconXLg /></div>

    <form @submit.prevent="settings.updateSettings()">
      <div class="formContent">
        <label for="pomodoroTime">Study</label>
        <div class="inputcontainer">
          <input
            v-model="settings.settings.pomodoroTime"
            inputmode="numeric"
            id="pomodoroTime"
            step="0.01"
          />
          <p>M</p>
        </div>

        <label for="shortRest">Short rest</label>
        <div class="inputcontainer">
          <input
            v-model="settings.settings.shortRest"
            inputmode="numeric"
            id="shortRest"
            step="0.01"
          />
          <p>M</p>
        </div>

        <label for="longRest">Long rest</label>
        <div class="inputcontainer">
          <input
            v-model="settings.settings.longRest"
            inputmode="numeric"
            id="longRest"
            step="0.01"
          />
          <p>M</p>
        </div>

        <label for="longRest">Study periods until long rest</label>
        <div class="inputcontainer">
          <input
            v-model="settings.settings.pomodoroTillLongRest"
            inputmode="numeric"
            id="pomodoroTillLongRest"
            step="0.01"
          />
          <p>M</p>
        </div>
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
  grid-template-columns: 1fr 80px;
  row-gap: 30px;
  align-items: center;
}

label {
  color: white;
}

.inputcontainer {
  display: flex;
  align-items: center;
  gap: 5px;
}
.inputcontainer p {
  color: white;
}
input {
  background-color: transparent;
  color: white;
  border-radius: 5px;
  width: 100%;
}
</style>
