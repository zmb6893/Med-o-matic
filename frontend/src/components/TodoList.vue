<script lang="ts" setup>
import type { TaskType } from './Task/Task';

import { tasks } from '@/data/tasks';

const headers: string[] = [
	'Status',
	'Start',
	'Task Name',
	'Location',
	'Patient'
];

const tableContent: TaskType[] = tasks;

</script>

<template>
	<table class="table table-striped table-hover">
	<thead>
		<tr>
		<th v-for="header in headers" scope="col">{{ header }}</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="task in tableContent">
			<td>
				<input type="checkbox">
			</td>
			<td> {{ `${task.startTime.hour}:${task.startTime.minute.toString().padStart(2, '0')} ${task.startTime.type}` }}</td>
			<td> {{ task.name }}</td>
			<td> {{ task.location }}</td>
			<td> {{ task.patient }}</td>
		</tr>
	</tbody>
	</table>
</template>

<style scoped>
</style>