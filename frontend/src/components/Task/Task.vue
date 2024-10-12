<script lang="ts" setup>

import { type TaskType } from './Task'

const props = defineProps<{
  tasks?: TaskType[]
}>()

</script>

<template>
	<button 
    v-for="task in tasks"
    class="btn btn-primary task"
    :class="task.status"
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
.INCOMPLETE {
  background-color: #FF9F9F;
  border-color: #FF5757;
}
.UNCLAIMED {
  background-color: #9fddff;
  border-color: #5787ff;
}
</style>