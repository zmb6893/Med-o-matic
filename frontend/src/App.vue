<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper nav-bar">
      <nav>
        <RouterLink to="/">Independent Practitioner View</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView style="height: 96%;"/>
  
</template>

<style scoped>
.nav-bar {
  background-color: #FFFFFF;
  height: 3rem;
  align-content: center;
  border-radius: .5rem;
}
</style>
