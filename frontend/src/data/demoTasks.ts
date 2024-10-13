import type { TaskType } from "@/components/Task/Task"

const idTree = {
    '0': crypto.randomUUID(),
        '0-0': crypto.randomUUID(),
            '0-0-0': crypto.randomUUID(),
                '0-0-0-0': crypto.randomUUID(),
                '0-0-0-1': crypto.randomUUID(),  // New: Vital Signs Check
            '0-0-1': crypto.randomUUID(),  // New: Assisted Walking Exercise
    '1': crypto.randomUUID(),
        '1-0': crypto.randomUUID(),
            '1-0-0': crypto.randomUUID(),  // New: Blood Pressure Monitoring
            '1-0-1': crypto.randomUUID(),  // New: Dietary Consultation
    '2': crypto.randomUUID(),
        '2-0': crypto.randomUUID(),
            '2-0-0': crypto.randomUUID(),
                '2-0-0-0': crypto.randomUUID(),
                '2-0-0-1': crypto.randomUUID(),
            '2-0-1': crypto.randomUUID(),  // New: Yoga Breathing Exercises
        '2-1': crypto.randomUUID()  // New: Evening Walk
};

export const demoTasks: TaskType[] = [
    {
        status: 'UNCLAIMED',
        name: 'Vital Monitoring & Initial Recovery',
        owner: '',
        patient: 'John Doe',
        location: 'Hospital Room',
        date: new Date('2024-01-01'),
        startTime: { hour: 8, minute: 0 },
        endTime: { hour: 5, minute: 0 },
        id: idTree['0'],
        followUpTasks: [
            {
                status: 'UNCLAIMED',
                name: 'Mobility & Light Activity',
                owner: '',
                patient: 'John Doe',
                location: 'Hospital Room',
                date: new Date('2024-01-01'),
                startTime: { hour: 10, minute: 0 },
                endTime: { hour: 10, minute: 30 },
                id: idTree['0-0'],
                parent: idTree['0'],
                followUpTasks: [
                    {
                        status: 'UNCLAIMED',
                        name: 'First Unassisted Walk',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Hospital Room',
                        date: new Date('2024-01-02'),
                        startTime: { hour: 9, minute: 0 },
                        endTime: { hour: 9, minute: 15 },
                        id: idTree['0-0-0'],
                        parent: idTree['0-0'],
                        followUpTasks: [
                            {
                                status: 'UNCLAIMED',
                                name: 'Mobility Assessment',
                                owner: '',
                                patient: 'John Doe',
                                location: 'Physical Therapy Room',
                                date: new Date('2024-01-02'),
                                startTime: { hour: 11, minute: 0 },
                                endTime: { hour: 11, minute: 30 },
                                id: idTree['0-0-0-0'],
                                parent: idTree['0-0-0']
                            },
                            {
                                status: 'UNCLAIMED',
                                name: 'Vital Signs Check',
                                owner: '',
                                patient: 'John Doe',
                                location: 'Nursing Station',
                                date: new Date('2024-01-02'),
                                startTime: { hour: 12, minute: 0 },
                                endTime: { hour: 12, minute: 15 },
                                id: crypto.randomUUID(),
                                parent: idTree['0-0-0']
                            }
                        ]
                    },
                    {
                        status: 'UNCLAIMED',
                        name: 'Assisted Walking Exercise',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Hospital Corridor',
                        date: new Date('2024-01-02'),
                        startTime: { hour: 3, minute: 0 },
                        endTime: { hour: 3, minute: 30 },
                        id: crypto.randomUUID(),
                        parent: idTree['0-0']
                    }
                ]
            }
        ]
    },
    {
        status: 'INCOMPLETE',
        name: 'Follow-Up Appointment',
        owner: 'Mr. Lam',
        patient: 'John Doe',
        location: 'Cardiology Clinic',
        date: new Date('2024-01-07'),
        startTime: { hour: 9, minute: 0 },
        endTime: { hour: 10, minute: 0 },
        id: idTree['1'],
        followUpTasks: [
            {
                status: 'UNCLAIMED',
                name: 'Medication Adjustment Review',
                owner: '',
                patient: 'John Doe',
                location: 'Pharmacy',
                date: new Date('2024-01-07'),
                startTime: { hour: 10, minute: 30 },
                endTime: { hour: 11, minute: 0 },
                id: idTree['1-0'],
                parent: idTree['1'],
                followUpTasks: [
                    {
                        status: 'UNCLAIMED',
                        name: 'Blood Pressure Monitoring',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Clinic Room',
                        date: new Date('2024-01-08'),
                        startTime: { hour: 9, minute: 30 },
                        endTime: { hour: 9, minute: 45 },
                        id: crypto.randomUUID(),
                        parent: idTree['1-0']
                    },
                    {
                        status: 'UNCLAIMED',
                        name: 'Dietary Consultation',
                        owner: 'Dietitian',
                        patient: 'John Doe',
                        location: 'Nutrition Office',
                        date: new Date('2024-01-08'),
                        startTime: { hour: 10, minute: 15 },
                        endTime: { hour: 11, minute: 0 },
                        id: crypto.randomUUID(),
                        parent: idTree['1-0']
                    }
                ]
            }
        ]
    },
    {
        status: 'UNCLAIMED',
        name: 'Daily Walking Exercise',
        owner: '',
        patient: 'John Doe',
        location: 'Home',
        date: new Date('2024-01-21'),
        startTime: { hour: 8, minute: 0 },
        endTime: { hour: 8, minute: 30 },
        id: idTree['2'],
        followUpTasks: [
            {
                status: 'UNCLAIMED',
                name: 'Stretching Exercises',
                owner: '',
                patient: 'John Doe',
                location: 'Home',
                date: new Date('2024-01-22'),
                startTime: { hour: 8, minute: 30 },
                endTime: { hour: 9, minute: 0 },
                id: idTree['2-0'],
                parent: idTree['2'],
                followUpTasks: [
                    {
                        status: 'UNCLAIMED',
                        name: 'Strength Building Session',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Physical Therapy Room',
                        date: new Date('2024-01-24'),
                        startTime: { hour: 10, minute: 0 },
                        endTime: { hour: 10, minute: 45 },
                        id: idTree['2-0-0'],
                        parent: idTree['2-0'],
                        followUpTasks: [
                            {
                                status: 'UNCLAIMED',
                                name: 'Endurance Assessment',
                                owner: '',
                                patient: 'John Doe',
                                location: 'Physical Therapy Room',
                                date: new Date('2024-01-26'),
                                startTime: { hour: 9, minute: 0 },
                                endTime: { hour: 9, minute: 30 },
                                id: idTree['2-0-0-0'],
                                parent: idTree['2-0-0']
                            },
                            {
                                status: 'UNCLAIMED',
                                name: 'Medical Checkup',
                                owner: '',
                                patient: 'John Doe',
                                location: 'Lab',
                                date: new Date('2024-01-26'),
                                startTime: { hour: 11, minute: 0 },
                                endTime: { hour: 11, minute: 30 },
                                id: idTree['2-0-0-1'],
                                parent: idTree['2-0-0']
                            }
                        ]
                    },
                    {
                        status: 'UNCLAIMED',
                        name: 'Yoga Breathing Exercises',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Home',
                        date: new Date('2024-01-23'),
                        startTime: { hour: 8, minute: 45 },
                        endTime: { hour: 9, minute: 15 },
                        id: crypto.randomUUID(),
                        parent: idTree['2-0']
                    }
                ]
            },
            {
                status: 'UNCLAIMED',
                name: 'Evening Walk',
                owner: '',
                patient: 'John Doe',
                location: 'Neighborhood Park',
                date: new Date('2024-01-22'),
                startTime: { hour: 5, minute: 0 },
                endTime: { hour: 5, minute: 30 },
                id: crypto.randomUUID(),
                parent: idTree['2']
            }
        ]
    }
]
