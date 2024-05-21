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
        <div class="aboutListElement">
          <img class="aboutImages" src="../assets/InfoPopup/timer.png" alt="Timer" />
          <h2>A endless scroller Pomodoro timer</h2>
        </div>
        <div class="aboutListElement">
          <img class="aboutImages" src="../assets/InfoPopup/earnPD.png" alt="Pomodoro dollars" />
          <h2>Keep studying to earn Pomodoro dollars</h2>
        </div>
        <div class="aboutListElement">
          <img class="aboutImages" src="../assets//InfoPopup/newVehicle.png" alt="Ghost car" />
          <h2>Buy new vehicles</h2>
        </div>
        <div class="questionContainer">
          <h3>What's a Pomodoro?</h3>
          <p>
            Pomodoro technique is a time management method based on 25-minute stretches of focused
            work broken by five-minute breaks. Longer breaks, typically 15 to 30 minutes, are taken
            after four consecutive work intervals. Each work interval is called a pomodoro.
          </p>
        </div>
        <div class="questionContainer">
          <h3>Why is there a login? Seems unnecessary</h3>
          <p>
            This project was made as a university project that required authorization. You won’t be
            logged out and there no email verification, so if you want you can make a email up
            ;&#x29;
          </p>
        </div>
      </div>
      <div class="api">
        <p>(needed to use a api for the assignment criteria so here's a joke)</p>
        <p>Add a joke here</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aboutImages {
  max-width: 100px;
  max-height: 100px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.content {
  display: flex;
}
.aboutListElement {
  display: flex;
  align-items: center;
  gap: 50px;
  height: 100px;
}
.aboutListElement h2 {
  font-size: 30px;
  color: white;
}
.questionContainer h3 {
  color: white;
}
.questionContainer p {
  color: white;
  font-size: 16px;
  font-weight: 200;
}
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

  padding: 60px 50px 10px;
}

.close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #d8c25a;
  cursor: pointer;
}

.close:hover {
  color: #c0ae50;
}
</style>
