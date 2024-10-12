<script lang="ts" setup>
const hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5PM', '6PM', '7PM']
</script>

<template>
	<table>
		<tr v-for="time in hours">
			<td class="time-stamp">
				{{ time }}
			</td>
			<td class="task-cell">
				<button class="btn btn-primary task"> Task</button>
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