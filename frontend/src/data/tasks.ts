import type { TaskType } from "@/components/Task/Task"

export const tasks: TaskType[] = [
	// Example
	// Add more TaskTypes here! Checkout the frontend/src/components/Task/Task.ts for the definition

	{
		id: crypto.randomUUID(),
		status: 'UNCLAIMED',
		name: 'Flip patient',
		owner: '',
		patient: 'Sue P.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 6,
			minute: 0
		},
		endTime: {
			hour: 7,
			minute: 0
		}
	},
	{
		id: crypto.randomUUID(),
		status: 'INCOMPLETE',
		name: 'Flip patient off',
		owner: 'Spatula',
		patient: 'Pan Cake',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 8,
			minute: 0
		},
		endTime: {
			hour: 10,
			minute: 0
		}
	},
	{
		id: crypto.randomUUID(),
		status: 'COMPLETE',
		name: 'Flip patient up',
		owner: 'Spatula',
		patient: 'Pan Cake',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 8,
			minute: 0
		},
		endTime: {
			hour: 9,
			minute: 0
		}
	},
	{
		id: crypto.randomUUID(),
		status: 'INCOMPLETE',
		name: 'Follow up on patient prescription',
		owner: 'Fred',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 8,
			minute: 0
		},
		endTime: {
			hour: 9,
			minute: 0
		}
	},
	{
		id: crypto.randomUUID(),
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Fung I.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 10,
			minute: 0
		},
		endTime: {
			hour: 11,
			minute: 0
		}
	},
	{
		id: crypto.randomUUID(),
		status: 'UNCLAIMED',
		name: 'Flip patient off',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 13,
			minute: 0
		},
		endTime: {
			hour: 14,
			minute: 0
		}
	},
	{
		id: crypto.randomUUID(),
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 16,
			minute: 0
		},
		endTime: {
			hour: 17,
			minute: 0
		}
	},
	{
		id: crypto.randomUUID(),
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 16,
			minute: 0
		},
		endTime: {
			hour: 17,
			minute: 0
		}
	},
	{
		id: crypto.randomUUID(),
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 17,
			minute: 0
		},
		endTime: {
			hour: 18,
			minute: 0
		}
	},
	{
		id: crypto.randomUUID(),
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 18,
			minute: 0
		},
		endTime: {
			hour: 19,
			minute: 0
		}
	},
	{
		id: crypto.randomUUID(),
		status: 'UNCLAIMED',
		name: 'Follow up on patient prescription',
		owner: '',
		patient: 'Isadora M.',
		location: 'room 203',
		date: new Date(),
		startTime: {
			hour: 18,
			minute: 0
		},
		endTime: {
			hour: 19,
			minute: 0
		}
	},
	{
		status: 'UNCLAIMED',
		name: 'Surgery Follow-up: Knee Replacement',
		owner: '',
		patient: 'John Doe',
		location: 'General Hospital, Room 301',
		date: new Date(),
		startTime: { hour: 10, minute: 30 },
		endTime: { hour: 11, minute: 0 },
		id: crypto.randomUUID()
	},
	{
		status: 'INCOMPLETE',
		name: 'Post-Surgery Checkup: Heart Surgery',
		owner: 'Dr. Sarah Lee',
		patient: 'Jane Smith',
		location: 'Cardiology Clinic, Room 12',
		date: new Date(),
		startTime: { hour: 2, minute: 0 },
		endTime: { hour: 2, minute: 30 },
		id: crypto.randomUUID()
	},
	{
		status: 'COMPLETE',
		name: 'Surgery Follow-up: Hip Replacement',
		owner: 'Dr. Robert Johnson',
		patient: 'Michael Brown',
		location: 'Orthopedic Clinic, Room 5',
		date: new Date(),
		startTime: { hour: 9, minute: 0 },
		endTime: { hour: 9, minute: 45 },
		id: crypto.randomUUID()
	},
	{
		status: 'INCOMPLETE',
		name: 'Post-Surgery Consultation: Cataract Surgery',
		owner: 'Dr. Emily Davis',
		patient: 'Alice Green',
		location: 'Ophthalmology Clinic, Room 2',
		date: new Date(),
		startTime: { hour: 11, minute: 0 },
		endTime: { hour: 11, minute: 30 },
		id: crypto.randomUUID()
	},
	{
		status: 'UNCLAIMED',
		name: 'Surgery Follow-up: Appendectomy',
		owner: '',
		patient: 'William Harris',
		location: 'Surgical Ward, Room 15',
		date: new Date(),
		startTime: { hour: 3, minute: 15 },
		endTime: { hour: 3, minute: 45 },
		id: crypto.randomUUID()
	},
	{
		status: 'INCOMPLETE',
		name: 'Flip Patient: Prevent Bed Sores',
		owner: 'Nurse Alex Morgan',
		patient: 'Emma White',
		location: 'ICU, Room 8',
		date: new Date(),
		startTime: { hour: 8, minute: 0 },
		endTime: { hour: 8, minute: 15 },
		id: crypto.randomUUID()
	},
	{
		status: 'INCOMPLETE',
		name: 'Patient Mobility: Assist with Walking',
		owner: 'Nurse Mary Johnson',
		patient: 'Henry Clark',
		location: 'Rehabilitation Ward, Room 4',
		date: new Date(),
		startTime: { hour: 22, minute: 45 },
		endTime: { hour: 23, minute: 15 },
		id: crypto.randomUUID()
	}
]