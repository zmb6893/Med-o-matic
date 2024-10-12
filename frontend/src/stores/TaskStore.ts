import type { TaskType } from "@/components/Task/Task";
import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		tasks: [] as TaskType[]
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
				task.status = 'COMPLETE';
			}
		}
	},
});