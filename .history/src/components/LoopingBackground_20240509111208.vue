<template>
  <div class="outerContainer">
    <img class="image" src="../assets/background.jpg" />
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

.image {
  animation: studyTime 10s linear infinite;
}

@keyframes studyTime {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
