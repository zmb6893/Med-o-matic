<script lang="ts" setup>
import Task from './Task/Task.vue';
import { type TaskType } from './Task/Task'

const hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5PM', '6PM', '7PM']

const tasks: TaskType[] = [
	{
		status: 'UNCLAIMED',
		name: 'Flip patient',
		owner: 'Spatula',
		date: new Date(),
		startTime: {
			hour: 6,
			minute: 0,
			type: 'AM'
		},
		endTime: {
			hour: 7,
			minute: 0,
			type: 'AM'
		}
	},
	{
		status: 'INCOMPLETE',
		name: 'Flip patient off',
		owner: 'Spatula',
		date: new Date(),
		startTime: {
			hour: 6,
			minute: 0,
			type: 'AM'
		},
		endTime: {
			hour: 7,
			minute: 0,
			type: 'AM'
		}
	},
	{
		status: 'COMPLETE',
		name: 'Flip patient up',
		owner: 'Spatula',
		date: new Date(),
		startTime: {
			hour: 8,
			minute: 0,
			type: 'AM'
		},
		endTime: {
			hour: 9,
			minute: 0,
			type: 'AM'
		}
	}
]
</script>

<template>
	<table>
		<tr v-for="time in hours">
			<td class="time-stamp">
				{{ time }}
			</td>
			<td class="task-cell">
				<Task :task="tasks[0]"></Task>
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