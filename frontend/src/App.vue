<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Independent Practitioner View</RouterLink>
      </nav>
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>
  
</template>

<style scoped>
</style>
