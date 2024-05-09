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
  right: -100vw;
  left: 0;
  top: 0;
  transition: 1s;
}

@keyframes studyTime {
  from {
    left: 0;
  }
  to {
    right: -100vw;
  }
}
</style>
