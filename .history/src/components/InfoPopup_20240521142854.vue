<script setup>
import { BIconXLg } from 'bootstrap-icons-vue'
</script>

<script>
export default {
  props: {
    open: Boolean,
    toggleOpen: Function
  },
  data() {
    return {
      joke: ''
    }
  },
  methods: {
    closeSettings() {
      this.$router.push('/')
    },
    async fetchJoke() {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      })
      const data = await response.json()
      this.joke = data.joke
    }
  },
  computed() {},
  mounted() {
    this.fetchJoke()
  }
}
</script>
<template>
  <div v-if="open" class="popup">
    <h1>A Trip to <br /><span>Pomodoro</span></h1>
    <div class="close" @click="toggleOpen"><BIconXLg /></div>
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
          <h2>Buy new vehicles!</h2>
        </div>
        <div class="questionContainer topQuestionContainer">
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
            This was made as a university project that required authorization. You won’t be logged
            out and there no email verification, so if you want you can make a email up ;&#x29;
          </p>
        </div>
      </div>
      <div class="api">
        <p class="jokeInfo">(Needed to use a api for the assignment criteria so here's a joke)</p>
        <p class="joke">{{ joke }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logoutBtn:hover {
  background-color: #3d1514;
}

.aboutImages {
  max-width: 100px;
  max-height: 100px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.content {
  display: flex;
  scroll-padding: 20px;
  scrollbar-color: #d8c25a rgb(41, 27, 17);
  scrollbar-width: thin;
  overflow-y: scroll;

  overflow-x: hidden;
  max-height: calc(85vh - 200px);
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
.topQuestionContainer {
  margin-top: 60px;
}
.questionContainer {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.questionContainer h3 {
  color: white;
}
.questionContainer p {
  color: white;
  font-size: 16px;
  font-weight: 100;
}

.api {
  color: white;
  text-align: center;
}
.jokeInfo {
  font-size: 16px;
}
.joke {
  margin-top: 50px;
  max-width: 700px;
  transform: rotate(-10deg);
  font-family: monospace;

  color: #ffff00;
  animation: JokeAnimation 3s ease-in-out infinite;
}

@keyframes JokeAnimation {
  0% {
    transform: rotate(-10deg), scale(1);
  }

  50% {
    transform: rotate(-10deg) scale(1.1);
  }
  100% {
    transform: rotate(-10deg) scale(1);
  }
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

  z-index: 3;
  background: rgb(41, 27, 17);

  padding: 60px 50px 10px;

  top: calc(50% + 25px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95vw;
  height: calc(100vh - 100px);
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

@media (max-width: 1250px) {
  .content {
    flex-direction: column;
    gap: 100px;
  }
}

@media (max-width: 900px) {
  .aboutListElement h2 {
    font-size: 20px;
  }
  .aboutImages {
    max-width: 75px;
    max-height: 75px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .aboutListElement {
    gap: 25px;
  }
}

@media (max-width: 510px) {
  .aboutListElement {
    gap: 25px;
    flex-direction: column;
  }
}
</style>
