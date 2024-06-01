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
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
