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

  right: -100vw;
  animation: move 5s linear infinite;
  top: 0;
  transition: 1s;
}

@keyframes studyTime {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
