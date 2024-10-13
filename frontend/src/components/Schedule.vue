<script lang="ts" setup>
import { computed } from 'vue';
import Task from './Task/Task.vue';
import { useTaskStore } from '@/stores/TaskStore';


const hours = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

const taskStore = useTaskStore();
taskStore.getTasks();

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
					return `${task.startTime.hour}` === time;
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