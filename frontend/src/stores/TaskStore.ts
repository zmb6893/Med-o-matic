import type { TaskType } from "@/components/Task/Task";
import { tasks } from "@/data/tasks";
import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		tasks: tasks as TaskType[]
	}),

	actions: {
		addTask(task: TaskType) {
			this.tasks.push(task);
		},
		removeTask(taskId: string) {
			this.tasks = this.tasks.filter(task => task.id !== taskId);
		},
		toggleTaskCompletion(taskId: string) {
			const task = this.tasks.find(task => task.id === taskId);
			if (task) {
				if (task.status === 'COMPLETE') task.status = 'INCOMPLETE';
				else if (task.status === 'INCOMPLETE') task.status = 'COMPLETE';
				else if (task.status === 'UNCLAIMED') task.status = 'INCOMPLETE';
			}
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