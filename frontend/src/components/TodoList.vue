<script lang="ts" setup>
import { useTaskStore } from '@/stores/TaskStore';
import type { TaskType } from './Task/Task';
import { tasks } from '@/data/tasks';
import { useCurrentUserStore } from '@/stores/CurrentUserStore';
import { computed } from 'vue';

const headers: string[] = [
	'Status',
	'Start',
	'Task Name',
	'Location',
	'Patient',
	'Claim Task'
];

const taskStore = useTaskStore();
const userStore = useCurrentUserStore();
const tableContent = computed(() => {
	return taskStore.filteredTasks;
});

const updateStatus = (id: string) => {
	taskStore.toggleTaskCompletion(id)
}

const selectTask = (taskId: string) => {
	taskStore.setSelectedTask(taskId)
}

const updateSelectedTaskOwner = (isChecked: boolean, username: string, taskId: string) => {
    isChecked ? taskStore.updateTaskOwnerById(taskId, username) : taskStore.updateTaskOwnerById(taskId, '')
}

const createNewTask = () => {
	const newTask: TaskType = {
		status: 'UNCLAIMED',
		name: '',
		owner: '',
		patient: '',
		location: '',
		date: new Date(),
		startTime: {
			hour: 0,
			minute: 0
		},
		endTime: {
			hour: 0,
			minute: 0
		},
		id: ''
	}
	taskStore.addTask(newTask);
}

</script>

<template>
	<div class="row">
		<h1 class="spacing col">
			TODO Tasks
		</h1>
		<div class="col align-end">
			<button 
				class="btn btn-primary task-button"
				@click="createNewTask()"
			> New Task</button>
		</div>
	</div>
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
			<td> {{ `${task.startTime.hour}:${task.startTime.minute.toString().padStart(2, '0')}` }}</td>
			<td> {{ task.name }}</td>
			<td> {{ task.location }}</td>
			<td> {{ task.patient }}</td>
			<td>
				<input 
					type="checkbox" 
					:checked="task.status === 'COMPLETE'"
					@click="updateSelectedTaskOwner($event.target?.checked, userStore.user.name, task.id)"
					>
			</td>
		</tr>
	</tbody>
	</table>
</template>

<style scoped>

.glow {
	border: 2px solid rgb(0, 234, 255);
}
</style>