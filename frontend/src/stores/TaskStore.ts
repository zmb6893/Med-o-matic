import type { TaskType } from "@/components/Task/Task";
import { tasks } from "@/data/tasks";
import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		tasks: tasks as TaskType[],
		selectedTask: tasks[0] as TaskType
	}),

	actions: {
		addTask(task: TaskType) {
			this.tasks.push(task);
			this.selectedTask = task;
		},
		removeTask(taskId: string) {
			this.tasks = this.tasks.filter(task => task.id !== taskId);
			this.selectedTask = tasks[0];
		},
		toggleTaskCompletion(taskId: string) {
			const task = this.tasks.find(task => task.id === taskId);
			if (task) {
				if (task.status === 'COMPLETE') task.status = 'INCOMPLETE';
				else if (task.status === 'INCOMPLETE') task.status = 'COMPLETE';
				else if (task.status === 'UNCLAIMED') task.status = 'INCOMPLETE';
			}
			if (task) this.selectedTask = task;
		},
		setSelectedTask(taskId: string) {
			const task = this.tasks.find(task => task.id === taskId)
			if (task) this.selectedTask = task
		},
		updateTaskOwner(newOwner: string) {
			this.selectedTask.owner = newOwner;
		},
		updateTaskOwnerById(taskId: string, newOwner: string) {
			this.tasks.forEach(task => {
				if (task.id === taskId) {
					task.owner = newOwner;
				}
			})
		}
	},

	getters: {
		completedTasks(state) {
			return state.tasks.filter(task => task.status === 'COMPLETE');
		},
		activeTasks(state) {
			return state.tasks.filter(task => task.status === 'INCOMPLETE');
		},
		unclaimedTasks(state) {
			return state.tasks.filter(task => task.status === 'UNCLAIMED');
		}
	}
});