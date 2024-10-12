import type { TaskType } from "@/components/Task/Task"

export const tasks: TaskType[] = [
	// Example
	// Add more TaskTypes here! Checkout the frontend/src/components/Task/Task.ts for the definition

	{
		status: 'UNCLAIMED',
		name: 'Flip patient',
		owner: 'Spatula',
		patient: 'Sue P',
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
	}, {
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: 'Fred',
		patient: 'Isadora M.',
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
]