<script setup>
import { RouterView } from 'vue-router'
import NavItem from './components/NavItem.vue'
</script>

<template>
  <div class="noselect">
    <NavItem />

    <RouterView />
  </div>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
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
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
