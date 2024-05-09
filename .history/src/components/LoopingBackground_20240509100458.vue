<template>
  <div class="outerContainer">
    <img class="imagePos1" src="../assets/davidsgame.jpg" />
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
  /* animation: studyTime 5s linear infinite; */
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
