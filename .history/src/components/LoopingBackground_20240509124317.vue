<template>
  <div class="outerContainer">
    <img class="image imagePos1" src="../assets/davidsgame.jpg" />
    <img class="image imagePos2" src="../assets/davidsgame.jpg" />
    <img class="imageBackface" src="../assets/davidsgame.jpg" />
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
}
.imagePos1 {
  animation: studyTime 10s linear infinite;
}
.imagePos2 {
  position: absolute;
  left: 0
  animation: studyTime 10s linear infinite;
}
.imageBackface {
  position: absolute;
  z-index: -1;
  height: 100vh;
  top: 0;
  left: 0;
}

@keyframes studyTime {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
