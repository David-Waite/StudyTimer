<script setup>
import { RouterLink } from 'vue-router'
<script setup>
import { useTimerStore } from '@/stores/timer'
const timer = useTimerStore()
</script>
</script>

<template>
  <h1>settings</h1>
  <RouterLink to="/">home</RouterLink>
</template>

<style></style>
