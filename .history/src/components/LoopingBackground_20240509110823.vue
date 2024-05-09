<template>
  <div class="outerContainer">
    <!-- <img class="image imagePos1" src="../assets/davidsgame.jpg" />
    <img class="image imagePos2" src="../assets/davidsgame.jpg" /> -->
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
  animation: studyTime 10s linear infinite;
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
