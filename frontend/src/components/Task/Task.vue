<script lang="ts" setup>

import { type TaskType } from './Task'

const props = defineProps<{
  task: TaskType
}>()

</script>

<template>
	<button class="btn btn-primary task"> {{ task.name }}</button>
</template>

<style scoped>

</style>