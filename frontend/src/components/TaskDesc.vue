<script lang="ts" setup>
import Task from './Task/Task.vue';
import { tasks } from '@/data/tasks';
import { type TaskType } from './Task/Task'

var task = tasks[1];

</script>

<template>

    <!-- TODO let a practitioner edit the description -->

    <p>Task Name: {{ task.name }}</p>
    <p>Task Status {{ task.status }}</p>
    <p>Patient name: {{ task.patient }}</p>
    <p>Location: {{ task.location }}</p>
    <p>Task Owner: {{ task.owner }}</p>
    <p>Date: {{ task.date }}</p>
    <p>Start: {{ task.startTime.hour + ':' + task.startTime.minute + ' ' + task.startTime.type }}</p>
    <p>End: {{ task.endTime.hour + ':' + task.endTime.minute + task.endTime.type }}</p>

</template>

<style scoped>
.time-stamp {
	color: gray;
	width: 5rem;
	margin: 3rem;
}

.task-cell {
	border-left: 1px dotted rgb(190, 190, 190);
	border-bottom: 1px dotted rgb(203, 203, 203);
}

.task {
	width: 90%;
}

table {
	background-color: #FBFBFB;
	border-radius: .2rem;
}

tr {
	height: 3rem;
}

.task-cell {
	width: 85%;
	align-items: center;
	text-align: center;
}
</style>