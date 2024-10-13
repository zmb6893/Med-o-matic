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
    <label class="search-bar">
       <span class="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg></span> 

        <input type="text"
            @input="search" 
            placeholder="Search Patients"
            class="search-input">
        </input>
    </label>
    
</template>

<style scoped>
.search-bar {
    width: 65%;
    border-radius: .75rem;
    background-color: white;
}

.search-icon {
    padding: 2rem;
}

.search-input::selection {
    border: none;
}

input {
    width: 90%;
    border: none;
}

/* border-radius */

</style>

