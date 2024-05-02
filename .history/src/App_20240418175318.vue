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
}
</style>
