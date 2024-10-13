import type { TaskType } from "@/components/Task/Task";
import { tasks } from "@/data/tasks";
import { demoTasks } from "@/data/demoTasks";
import { defineStore } from "pinia";
import axios from 'axios';

export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		tasks: demoTasks as TaskType[],
		selectedTask: demoTasks[0] as TaskType,
		filteredTasks: demoTasks as TaskType[],
	}),

	actions: {
		async getTasks() {
			const response = await axios.get('http://localhost:3000/tasks');
			this.tasks = response.data;
			this.selectedTask = this.tasks[0];
			this.filteredTasks = this.tasks;
		},
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
				if (task.status === 'COMPLETE') {
					task.status = 'INCOMPLETE';
					task.followUpTasks?.forEach(followUpTask => this.removeTask(followUpTask.id))
				}
				else if (task.status === 'INCOMPLETE') {
					task.status = 'COMPLETE';
					task.followUpTasks?.forEach(followUpTask => this.addTask(followUpTask))
				}
				else if (task.status === 'UNCLAIMED') task.status = 'INCOMPLETE';
			}
			if (task) this.selectedTask = task;
		},
		setSelectedTask(taskId: string) {
			const task = this.tasks.find(task => task.id === taskId)
			if (task) this.selectedTask = task
		},
		setFilterPatient(name: string) {
			this.filteredTasks = this.tasks.filter(task => {
				return task.patient.toLowerCase().includes(name.toLowerCase())
			}).sort((t1, t2)=>{
				if (t1.date < t2.date) { // check same day
					return -1;
				} else if (t1.date > t2.date) {
					return 1;
				} else if (t1.startTime.hour.valueOf() < t2.startTime.hour.valueOf()) { // check same hour
					return -1;
				} else if (t1.startTime.hour.valueOf() > t2.startTime.hour.valueOf()) {
					return 1;
				} else if (t1.startTime.minute.valueOf() < t2.startTime.minute.valueOf()) { // check minute
					return -1;
				}
				return 1;
			})
		},

		updateTaskOwner(newOwner: string) {
			this.selectedTask.owner = newOwner;
			this.selectedTask.status = newOwner ? "INCOMPLETE" : "UNCLAIMED"
			console.log(this.selectedTask.status)
		},

		updateTaskOwnerById(taskId: string, newOwner: string) {
			this.tasks.forEach(task => {
				if (task.id === taskId) {
					task.owner = newOwner;
					task.status = newOwner ? "INCOMPLETE" : "UNCLAIMED";
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