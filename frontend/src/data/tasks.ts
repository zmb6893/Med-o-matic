import type { TaskType } from "@/components/Task/Task"

export const tasks: TaskType[] = [
	// Example
	{
		status: 'UNCLAIMED',
		name: 'Flip patient',
		owner: 'Spatula',
		date: new Date(),
		startTime: {
			hour: 6,
			minute: 0,
			type: 'AM'
		},
		endTime: {
			hour: 7,
			minute: 0,
			type: 'AM'
		}
	},

	// Add more TaskTypes here! Checkout the frontend/src/components/Task/Task.ts for the definition
]