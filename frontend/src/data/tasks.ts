import type { TaskType } from "@/components/Task/Task"

export const tasks: TaskType[] = [
	// Example
	// Add more TaskTypes here! Checkout the frontend/src/components/Task/Task.ts for the definition

	{
		status: 'UNCLAIMED',
		name: 'Flip patient',
		owner: '',
		patient: 'Sue P.',
		location: 'room 203',
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
	{
		status: 'INCOMPLETE',
		name: 'Flip patient off',
		owner: 'Spatula',
		patient: 'Pan Cake',
		location: 'room 203',
		date: new Date(),	
		startTime: {
			hour: 8,
			minute: 0,
			type: 'AM'
		},
		endTime: {
			hour: 10,
			minute: 0,
			type: 'AM'
		}
	},
	{
		status: 'COMPLETE',
		name: 'Flip patient up',
		owner: 'Spatula',
		patient: 'Pan Cake',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 8,
			minute: 0,
			type: 'AM'
		},
		endTime: {
			hour: 9,
			minute: 0,
			type: 'AM'
		}
	}, {
		status: 'INCOMPLETE',
		name: 'Follow up on patient prescription',
		owner: 'Fred',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 8,
			minute: 0,
			type: 'AM'
		},
		endTime: {
			hour: 9,
			minute: 0,
			type: 'AM'
		}
	}, {
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Fung I.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 10,
			minute: 0,
			type: 'AM'
		},
		endTime: {
			hour: 11,
			minute: 0,
			type: 'AM'
		}
	}, {
		status: 'UNCLAIMED',
		name: 'Flip patient off',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 1,
			minute: 0,
			type: 'PM'
		},
		endTime: {
			hour: 2,
			minute: 0,
			type: 'PM'
		}
	}, {
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 4,
			minute: 0,
			type: 'PM'
		},
		endTime: {
			hour: 5,
			minute: 0,
			type: 'PM'
		}
	}, {
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
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
		location: 'room 203',
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
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
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
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 4,
			minute: 0,
			type: 'PM'
		},
		endTime: {
			hour: 5,
			minute: 0,
			type: 'PM'
		}
	}, {
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 5,
			minute: 0,
			type: 'PM'
		},
		endTime: {
			hour: 6,
			minute: 0,
			type: 'PM'
		}
	}, {
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 6,
			minute: 0,
			type: 'PM'
		},
		endTime: {
			hour: 7,
			minute: 0,
			type: 'PM'
		}
	}, {
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 6,
			minute: 0,
			type: 'PM'
		},
		endTime: {
			hour: 7,
			minute: 0,
			type: 'PM'
		}
	},
]