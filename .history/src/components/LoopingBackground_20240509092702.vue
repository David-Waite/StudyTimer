<template>
  <div class="container"><img class="image" src="../assets/davidsgame.jpg" /></div>
</template>

<style scoped>
.container {
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  position: absolute;
  height: 100%;
  z-index: 1;
  object-fit: cover;
  overflow: hidden;
  top: 0;
  left: 0;
}
</style>
