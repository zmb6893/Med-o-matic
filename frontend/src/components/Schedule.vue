<script lang="ts" setup>
import { computed } from 'vue';
import Task from './Task/Task.vue';
import { useTaskStore } from '@/stores/TaskStore';

const hours = ['1AM', '2AM', '3AM', '4AM', '5AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12PM']

const taskStore = useTaskStore();
const tasks = computed(() => {
	return taskStore.filteredTasks;
});

</script>

<template>
	<h1 class="spacing">
		Schedule
	</h1>
	<table>
		<tr v-for="time in hours">
			<td class="time-stamp">
				{{ time }}
			</td>
			<td class="task-cell">
				<Task :tasks="tasks.filter(task => {
					return `${task.startTime.hour} ${task.startTime.type}` === time;
				})"></Task>
			</td>
		</tr>
	</table>
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