<script setup>
import { RouterView } from 'vue-router'
import NavItem from './components/NavItem.vue'
import InfoPopup from './components/InfoPopup.vue'
</script>

<template>
  <NavItem />
  <InfoPopup />
  <RouterView />
</template>

<style>
body {
  overflow: hidden;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.8px;
}
</style>
