<template>
  <div class="outerContainer">
    <img class="image" src="../assets/davidsgame.jpg" />
  </div>
</template>

<style scoped>
.outerContainer {
  position: absolute;
  top: 0px;
  left: 0;
}
.image {
  height: 100vh;
  position: absolute;
  right: -50px;
  top: 0;
  animation-duration: 5s;
  animation-name: studyTime;
}

@keyframes studyTime {
  from {
    left: 0;
  }
  to {
  }
}
</style>
