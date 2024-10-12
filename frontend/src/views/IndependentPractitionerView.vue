<script setup lang="ts">
import Schedule from '@/components/Schedule.vue';
import TaskDesc from '@/components/TaskDesc.vue';


</script>

<template>
	<div class="row">
		<div class="col-3 column-section">
			<h1 class="center">
				Schedule
			</h1>
			<Schedule></Schedule>
		</div>
		<div class="col-5 column-section">
			<h1 class="center">
				TODO Tasks
			</h1>
		</div>
		<div class="col-3 column-section">
			<h1 class="center">
				Task Description
			</h1>
			<TaskDesc></TaskDesc>
		</div>
	</div>
</template>

<style scoped>
	.column-section {
		background-color: #FFFFFF;
		border-radius: .5rem;
		margin: 1rem;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
	}

	h1 {
		color: #0090D8;
		font-size: 24px;
	}

	.center {
		text-align: center;
		width: 100%;
	}
</style>