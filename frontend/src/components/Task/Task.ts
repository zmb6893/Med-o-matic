export type TaskType = {
	status: 'UNCLAIMED' | 'INCOMPLETE' | 'COMPLETE'
	name: string
	owner: string
	patient: string
	location: string
	date: Date
	startTime: TaskTime 
	endTime: TaskTime
	id: string
}

export type TaskTime = {
	hour: Number
	minute: Number
	type: 'AM' | 'PM'
}