<script setup lang="ts">
import Schedule from '@/components/Schedule.vue';
import TaskDesc from '@/components/TaskDesc.vue';
import TodoList from '@/components/TodoList.vue';


</script>

<template>
	<div class="row">
		<div class="col-3 column-section">
			<Schedule></Schedule>
		</div>
		<div class="col-5 column-section">
			<TodoList></TodoList>
		</div>
		<div class="col-3 column-section">
			<TaskDesc></TaskDesc>
		</div>
	</div>
</template>

<style>
	.column-section {
		background-color: #FFFFFF;
		border-radius: .5rem;
		margin: 1rem;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
		overflow-y: scroll;
  		max-height: 95%;
	}

	h1 {
		color: #0090D8;
		font-size: 24px;
	}

	.spacing {
		padding: 1rem;
	}

	.task-button {
		margin: 1rem;
	}

	.align-end {
		text-align: end;
	}
</style>