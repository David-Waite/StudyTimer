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
    },
    addItem() {
      if (this.itemToAdd.length !== 0) {
        this.itemsArray.push(this.itemToAdd)
        this.itemToAdd = ''
      }
    },
    deleteItem(index) {
      this.itemsArray.splice(index, 1)
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
  <div v-if="$route.name === `shop`" class="settings">
    <div style="display: flex">
      <input type="text" placeholder="add item" v-model="itemToAdd" />
      <button @click="addItem">add item</button>
    </div>

    <div v-for="(item, index) in itemsArray" v-bind:key="index">
      <div style="display: flex">
        <button @click="deleteItem(index)">Delete</button>
        <h1>{{ item }}</h1>
      </div>
    </div>
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
</style>
