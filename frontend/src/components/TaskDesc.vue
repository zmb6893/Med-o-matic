<script lang="ts" setup>
import { useCurrentUserStore } from '@/stores/CurrentUserStore';
import { useTaskStore } from '@/stores/TaskStore';
import { computed } from 'vue';

const taskStore = useTaskStore();
const userStore = useCurrentUserStore();

const task = computed(() => taskStore.selectedTask);

const updateSelectedTaskOwner = (isChecked: boolean, username: string) => {
    isChecked ? taskStore.updateTaskOwner(username) : taskStore.updateTaskOwner('')
    console.log(task.value.owner)
}

</script>

<template>

    <!-- TODO let a practitioner edit the description -->

    <span>
        <input 
            type="checkbox" 
            @change="updateSelectedTaskOwner($event.target?.checked, userStore.user.name)"
            :checked="task.owner === userStore.user.name"
        > Assign to me
    </span>

    <p>Task Name:</p>
    <textarea>{{ task.name }}</textarea>
    
    <p>Task Status {{ task.status }}</p>
    <p>Patient name: {{ task.patient }}</p>
    <p>Location: {{ task.location }}</p>
    <p>Task Owner: {{ task.owner }}</p>
    <p>Date: {{ task.date.toDateString() }}</p>
    <p>Start: {{ task.startTime.hour + ':' + task.startTime.minute.toString().padStart(2, '0') + ' ' + task.startTime.type }}</p>
    <p>End: {{ task.endTime.hour + ':' + task.endTime.minute.toString().padStart(2, '0') + task.endTime.type }}</p>

</template>

<style scoped>
textarea {
    width: 100%;
}

</style>