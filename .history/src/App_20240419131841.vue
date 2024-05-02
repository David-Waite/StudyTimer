<script setup>
import { RouterView } from 'vue-router'
import NavItem from './components/NavItem.vue'
</script>

<template>
  <NavItem />
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-size: 20px;
  line-height: 36px;

  font-weight: 400;
  font-weight: 700;
  letter-spacing: 0.8px;
}
</style>
