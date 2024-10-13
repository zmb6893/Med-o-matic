<script lang="ts" setup>
import { useCurrentUserStore } from '@/stores/CurrentUserStore';
import { useTaskStore } from '@/stores/TaskStore';
import { computed } from 'vue';

const taskStore = useTaskStore();
const userStore = useCurrentUserStore();

const task = computed(() => taskStore.selectedTask);

const updateSelectedTaskOwner = (isChecked: boolean, username: string) => {
    isChecked ? taskStore.updateTaskOwner(username) : taskStore.updateTaskOwner('')
}

</script>

<template>

    <!-- TODO let a practitioner edit the description -->
    <h1 class="spacing">
        Task Description
    </h1>

    <span><h4>Task Name:<textarea>{{ task.name }}</textarea></h4></span>

    <span>
        <div class="horizontal">
            <span ><h4>Task Owner:</h4> <h5 :class="{'claimed-task': task.owner, 'unclaimed-task': !task.owner}"> {{ task.owner ? task.owner : 'OWNER NEEDED'}} </h5></span>            
        </div>
        
        <span style="display:inline-block; width: 2rem;"></span>
        <input 
            type="checkbox" 
            @change="updateSelectedTaskOwner($event.target?.checked, userStore.user.name)"
            :checked="task.owner === userStore.user.name"
        > Assign to me

        <p><b>Task Status</b> <i>{{ task.status }} </i></p>
    </span>
    
    <p>Patient name: <input :value="task.patient"> </p>
    <p>Location: <input :value="task.location"></p>
    <p>Date: <input :value="task.date.toDateString()"></p>
    <p>Start: <input :value="task.startTime.hour + ':' + task.startTime.minute.toString().padStart(2, '0')"></p>
    <p>End: <input :value="task.endTime.hour + ':' + task.endTime.minute.toString().padStart(2, '0')"></p>

    <button onsubmit="save">Save Details</button>

</template>

<style scoped>
textarea {
    width: 100%;
}

.horizontal {
    display: block ruby;
}

.claimed-task {
    color: rgb(0, 123, 255);
}

.unclaimed-task {
    color: rgb(255, 38, 0);
}

</style>