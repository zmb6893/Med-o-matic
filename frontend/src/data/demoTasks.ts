import type { TaskType } from "@/components/Task/Task"

const idTree = {
    '0': crypto.randomUUID(),
        '0-0': crypto.randomUUID(),
            '0-0-0': crypto.randomUUID(),
                '0-0-0-0': crypto.randomUUID(),
                '0-0-0-1': crypto.randomUUID(),  
            '0-0-1': crypto.randomUUID(),  
    '1': crypto.randomUUID(),
        '1-0': crypto.randomUUID(),
            '1-0-0': crypto.randomUUID(),  
            '1-0-1': crypto.randomUUID(),  
    '2': crypto.randomUUID(),
        '2-0': crypto.randomUUID(),
            '2-0-0': crypto.randomUUID(),
                '2-0-0-0': crypto.randomUUID(),
                '2-0-0-1': crypto.randomUUID(),
            '2-0-1': crypto.randomUUID(),  
        '2-1': crypto.randomUUID(),  
    '3': crypto.randomUUID(),
        '3-0': crypto.randomUUID(),
            '3-0-0': crypto.randomUUID(),  
            '3-0-1': crypto.randomUUID(),  
    '4': crypto.randomUUID(),
        '4-0': crypto.randomUUID(),
            '4-0-0': crypto.randomUUID(),  
            '4-0-1': crypto.randomUUID(),  
    '5': crypto.randomUUID(),
        '5-0': crypto.randomUUID(),
            '5-0-0': crypto.randomUUID(),  
            '5-0-1': crypto.randomUUID(),  
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
                        id: idTree['1-0-0'],
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
                        id: idTree['1-0-1'],
                        parent: idTree['1-0']
                    }
                ]
            }
        ]
    },
    {
        status: 'UNCLAIMED',
        name: 'Physical Therapy Session',
        owner: 'Physical Therapist',
        patient: 'John Doe',
        location: 'Therapy Center',
        date: new Date('2024-01-10'),
        startTime: { hour: 2, minute: 0 },
        endTime: { hour: 3, minute: 0 },
        id: idTree['3'],
        followUpTasks: [
            {
                status: 'UNCLAIMED',
                name: 'Range of Motion Exercises',
                owner: '',
                patient: 'John Doe',
                location: 'Therapy Center',
                date: new Date('2024-01-10'),
                startTime: { hour: 2, minute: 15 },
                endTime: { hour: 2, minute: 45 },
                id: idTree['3-0'],
                parent: idTree['3'],
                followUpTasks: [
                    {
                        status: 'UNCLAIMED',
                        name: 'Shoulder Flexibility',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Therapy Center',
                        date: new Date('2024-01-10'),
                        startTime: { hour: 2, minute: 45 },
                        endTime: { hour: 3, minute: 0 },
                        id: idTree['3-0-0'],
                        parent: idTree['3-0']
                    },
                    {
                        status: 'UNCLAIMED',
                        name: 'Leg Stretching',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Therapy Center',
                        date: new Date('2024-01-10'),
                        startTime: { hour: 3, minute: 0 },
                        endTime: { hour: 3, minute: 15 },
                        id: idTree['3-0-1'],
                        parent: idTree['3-0']
                    }
                ]
            }
        ]
    },
    {
        status: 'UNCLAIMED',
        name: 'Dietary Counseling Session',
        owner: 'Nutritionist',
        patient: 'John Doe',
        location: 'Clinic',
        date: new Date('2024-01-12'),
        startTime: { hour: 10, minute: 0 },
        endTime: { hour: 11, minute: 0 },
        id: idTree['4'],
        followUpTasks: [
            {
                status: 'UNCLAIMED',
                name: 'Meal Plan Review',
                owner: '',
                patient: 'John Doe',
                location: 'Clinic',
                date: new Date('2024-01-12'),
                startTime: { hour: 10, minute: 15 },
                endTime: { hour: 10, minute: 45 },
                id: idTree['4-0'],
                parent: idTree['4'],
                followUpTasks: [
                    {
                        status: 'UNCLAIMED',
                        name: 'Protein Intake Evaluation',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Clinic',
                        date: new Date('2024-01-12'),
                        startTime: { hour: 10, minute: 30 },
                        endTime: { hour: 10, minute: 45 },
                        id: idTree['4-0-0'],
                        parent: idTree['4-0']
                    },
                    {
                        status: 'UNCLAIMED',
                        name: 'Carbohydrate Needs Assessment',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Clinic',
                        date: new Date('2024-01-12'),
                        startTime: { hour: 10, minute: 45 },
                        endTime: { hour: 11, minute: 0 },
                        id: idTree['4-0-1'],
                        parent: idTree['4-0']
                    }
                ]
            }
        ]
    },
    {
        status: 'INCOMPLETE',
        name: 'Lab Work & Blood Tests',
        owner: 'Lab Technician',
        patient: 'John Doe',
        location: 'Lab Center',
        date: new Date('2024-01-15'),
        startTime: { hour: 8, minute: 0 },
        endTime: { hour: 8, minute: 30 },
        id: idTree['5'],
        followUpTasks: [
            {
                status: 'UNCLAIMED',
                name: 'Blood Sample Collection',
                owner: '',
                patient: 'John Doe',
                location: 'Lab Center',
                date: new Date('2024-01-15'),
                startTime: { hour: 8, minute: 0 },
                endTime: { hour: 8, minute: 15 },
                id: idTree['5-0'],
                parent: idTree['5'],
                followUpTasks: [
                    {
                        status: 'UNCLAIMED',
                        name: 'Blood Pressure Check',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Lab Center',
                        date: new Date('2024-01-15'),
                        startTime: { hour: 8, minute: 15 },
                        endTime: { hour: 8, minute: 20 },
                        id: idTree['5-0-0'],
                        parent: idTree['5-0']
                    },
                    {
                        status: 'UNCLAIMED',
                        name: 'Cholesterol Test',
                        owner: '',
                        patient: 'John Doe',
                        location: 'Lab Center',
                        date: new Date('2024-01-15'),
                        startTime: { hour: 8, minute: 20 },
                        endTime: { hour: 8, minute: 30 },
                        id: idTree['5-0-1'],
                        parent: idTree['5-0']
                    }
                ]
            }
        ]
    }
];