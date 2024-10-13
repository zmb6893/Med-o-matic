<script lang="ts" setup>
import { useTaskStore } from '@/stores/TaskStore';

const taskStore = useTaskStore();

const search = (options: any) => {
    let searchText = options.target.value;
    taskStore.setFilterPatient(searchText);
}

</script>

<template>

<!-- search -->
<label>Search Patients</label><input type="text"
      @change="search" ></input>

</template>

<style scoped>
textarea {
    width: 100%;
}

/* border-radius */

</style>

