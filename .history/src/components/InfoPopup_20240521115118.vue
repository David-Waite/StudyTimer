<script setup>
import { BIconXLg } from 'bootstrap-icons-vue'
</script>

<script>
export default {
  data() {
    return {
      open: true
    }
  },
  methods: {
    closeSettings() {
      this.$router.push('/')
    }
  },
  computed() {},
  mounted() {}
}
</script>
<template>
  <div v-if="open" class="popup">
    <h1>A Trip to <br /><span>Pomodoro</span></h1>
    <div class="close" @click="closeSettings"><BIconXLg /></div>
    <div class="content">
      <div class="aboutContent">
        <div>
          <img src="" alt="" />
          <p>A endless scroller Pomodoro timer</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Keep studying to earn Pomodoro dollars</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Buy new vehicles</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-top: -50px;
  line-height: 36px;
  font-size: 16px;
  text-align: center;
  margin-bottom: 48px;
  color: white;
}
h1 span {
  font-size: 50px;
}
.popup {
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
