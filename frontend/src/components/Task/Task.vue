<script lang="ts" setup>

import { useTaskStore } from '@/stores/TaskStore';
import { type TaskType } from './Task'

const props = defineProps<{
  tasks?: TaskType[]
}>()

const taskStore = useTaskStore();

const setSelected = (taskId: string) => {
  taskStore.setSelectedTask(taskId)
}

</script>

<template>
	<button 
    v-for="task in tasks"
    class="btn btn-primary task"
    :class="task.status"
    @click="setSelected(task.id)"
    > {{ task.name }}</button>
</template>

<style scoped>
button {
  color: rgb(120, 120, 120)
}
.COMPLETE {
  background-color: #A8FFAE;
  border-color: #20B925;
}
.UNCLAIMED {
  background-color: #FF9F9F;
  border-color: #FF5757;
}
.INCOMPLETE {
  background-color: #9fddff;
  border-color: #5787ff;
}
</style>