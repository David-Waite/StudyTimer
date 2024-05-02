<template>
  <h1>settings</h1>
  <RouterLink to="/">home</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePomodoroSettingsStore } from '@/stores/settings'
const settings = usePomodoroSettingsStore()
</script>

<style></style>
