<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import OptionsBar from '@/components/OptionsBar.vue';

</script>

<template>
  <header>
    <div class="wrapper nav-bar">
        <OptionsBar></OptionsBar>
    </div>
  </header>

  <RouterView style="height: 96%;"/>
  
</template>

<style scoped>
.nav-bar {
  background-color: #007bff;
  height: 3rem;
  align-content: center;
  border-radius: .5rem;
  text-align: center;
}
</style>
