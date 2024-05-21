<script setup>
import { getAuth, signOut } from 'firebase/auth'
import router from '@/router'
import { BIconXLg } from 'bootstrap-icons-vue'
import db from '@/main'
import { doc, updateDoc } from 'firebase/firestore'
</script>

<script>
export default {
  props: {
    settings: Object,
    auth: Object
  },
  data() {
    return {
      open: true,
      settingsInput: {
        pomodoroTime: this.settings.pomodoroTime,
        shortRest: this.settings.shortRest,
        longRest: this.settings.longRest,
        pomodoroTillLongRest: this.settings.pomodoroTillLongRest
      }
    }
  },
  methods: {
    handleSignOut() {
      signOut(this.auth)
      router.push('/signup')
    },
    closeSettings() {
      this.$router.push('/')
    },
    async updateSettings() {
      const auth = getAuth()
      const washingtonRef = doc(db, 'users', auth.currentUser.uid)
      await updateDoc(washingtonRef, {
        settings: this.settingsInput
      })
      location.reload()
    }
  },
  computed() {},
  mounted() {
    //might not need this have a proper check
  }
}
</script>
<template>
  <div v-if="$route.name === `settings`" class="settings">
    <h1>SETTINGS</h1>

    <div class="close" @click="closeSettings"><BIconXLg /></div>

    <form @submit.prevent="updateSettings()">
      <div class="formContent">
        <label for="pomodoroTime">Study</label>
        <div class="inputcontainer">
          <input
            v-model="settingsInput.pomodoroTime"
            inputmode="numeric"
            id="pomodoroTime"
            step="0.01"
          />
          <p>M</p>
        </div>

        <label for="shortRest">Short rest</label>
        <div class="inputcontainer">
          <input v-model="settingsInput.shortRest" inputmode="numeric" id="shortRest" step="0.01" />
          <p>M</p>
        </div>

        <label for="longRest">Long rest</label>
        <div class="inputcontainer">
          <input v-model="settingsInput.longRest" inputmode="numeric" id="longRest" step="0.01" />
          <p>M</p>
        </div>

        <label for="longRest">Study periods until long rest</label>
        <div class="inputcontainer">
          <input
            v-model="settingsInput.pomodoroTillLongRest"
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

@media (max-width: 700px) {
  .settings {
    width: 95vw;
  }
}

@media (max-width: 500px) {
  label {
    font-size: 16px;
  }
}

@media (max-width: 450px) {
  .settings {
    height: 70vh;
  }
  h1,
  .logoutBtn {
    font-size: 24px;
  }
  h1 {
    top: -5px;
  }
  .logoutBtn {
    bottom: -65px;
  }
}

@media (max-width: 360px) {
  .settings {
    padding: 60px 10px 10px;
    font-size: 14px;
  }
}

@media (max-width: 510px) {
  .aboutListElement {
    gap: 25px;
    flex-direction: column-reverse;
    height: 100%;
    padding-right: 5px;
  }
  .topQuestionContainer {
    margin-top: 20px;
  }
  .aboutImages {
    max-width: 100px;
    max-height: 100px;
  }
  .content {
    gap: 0px;
  }
  .aboutContent {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    text-align: center;
  }
  .popup {
    padding: 60px 10px 10px;
  }
}
</style>
