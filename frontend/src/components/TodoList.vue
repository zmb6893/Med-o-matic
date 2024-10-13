<script lang="ts" setup>
import { useTaskStore } from '@/stores/TaskStore';
import type { TaskType } from './Task/Task';
import { computed } from 'vue';

const headers: string[] = [
	'Status',
	'Start',
	'Task Name',
	'Location',
	'Patient'
];

const taskStore = useTaskStore();
const tasks = computed(() => {
	const filter = taskStore.filterPatient;
	return taskStore.tasks.filter((t) => {
		return t.patient.includes(filter.toString());
	});
}).value;

const tableContent: TaskType[] = tasks.sort((t1, t2)=>{
	if (t1.date < t2.date) { // check same day
		return -1;
	} else if (t1.date > t2.date) {
		return 1;
	} else if (t1.startTime.type == 'AM' && t2.startTime.type == 'PM') { // check same AM/PM
		return -1;
	} else if (t1.startTime.type == 'PM' && t2.startTime.type == 'AM') {
		return 1;
	} else if (t1.startTime.hour.valueOf() < t2.startTime.hour.valueOf()) { // check same hour
		return -1;
	} else if (t1.startTime.hour.valueOf() > t2.startTime.hour.valueOf()) {
		return 1;
	} else if (t1.startTime.minute.valueOf() < t2.startTime.minute.valueOf()) { // check minute
		return -1;
	}
	return 1;
});

const updateStatus = (id: string) => {
	taskStore.toggleTaskCompletion(id)
}

const selectTask = (taskId: string) => {
	taskStore.setSelectedTask(taskId)
}

</script>

<template>
	<table class="table table-striped table-hover">
	<thead>
		<tr>
		<th v-for="header in headers" scope="col">{{ header }}</th>
		</tr>
	</thead>
	<tbody>
		<tr 
			v-for="task in tableContent" 
			:class="{'glow': task.id === taskStore.selectedTask.id}"
			@click="selectTask(task.id)"
		>
			<td>
				<input 
					type="checkbox" 
					:checked="task.status === 'COMPLETE'"
					@click="updateStatus(task.id)"
					>
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

.glow {
	border: 2px solid rgb(0, 234, 255);
}
</style>