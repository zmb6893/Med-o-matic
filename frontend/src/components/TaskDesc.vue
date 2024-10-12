<script lang="ts" setup>
import { useTaskStore } from '@/stores/TaskStore';

const taskStore = useTaskStore();
const tasks = taskStore.tasks;

var task = tasks[1];

</script>

<template>

    <!-- TODO let a practitioner edit the description -->

    <p>Task Name:</p>
    <textarea>{{ task.name }}</textarea>
    
    <p>Task Status {{ task.status }}</p>
    <p>Patient name: {{ task.patient }}</p>
    <p>Location: {{ task.location }}</p>
    <p>Task Owner: {{ task.owner }}</p>
    <p>Date: {{ task.date.toDateString() }}</p>
    <p>Start: {{ task.startTime.hour + ':' + task.startTime.minute + ' ' + task.startTime.type }}</p>
    <p>End: {{ task.endTime.hour + ':' + task.endTime.minute + task.endTime.type }}</p>

</template>

<style scoped>
textarea {
    width: 100%;
}

</style>