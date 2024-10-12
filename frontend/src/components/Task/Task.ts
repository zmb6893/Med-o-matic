export type TaskType = {
	status: 'UNCLAIMED' |'INCOMPLETE' | 'COMPLETE'
	name: string
	owner: string
	patient: string
	date: Date
	startTime: TaskTime 
	endTime: TaskTime
}

export type TaskTime = {
	hour: Number
	minute: Number
	type: 'AM' | 'PM'
}