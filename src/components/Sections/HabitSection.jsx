import { Typography, Checkbox, Input, Table, Button } from 'antd';
import { useState } from 'react';
import { habits } from '../../data.js'

export default function HabitSection() {
    const [data, setData] = useState(habits)
    const [newHabit, setNewHabit] = useState('')
    const handleAddHabit = () => {
        if (newHabit.trim()) {
            const newItem = {
                key: Date.now(),
                habit: newHabit,
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: false,
            }
            setData([...data, newItem])
            setNewHabit('')
        }
    }

    const handleCheckboxChange = (recordKey, day, checked) => {
        const newData = data.map(item => {
            if (item.key == recordKey) {
                return { ...item, [day]: checked }
            }
            return item
        })
        setData(newData)
    }

    const handleDelete = (key) => {
        setData(data.filter(item => item.key !== key))
    }

    const columns = [
        {
            title: 'Habit',
            dataIndex: 'habit',
            key: 'habit',
        },
        {
            title: 'Monday',
            dataIndex: 'monday',
            key: '1',
            align: 'center',
            render: (_, record) => (
                <Checkbox
                    checked={record.monday}
                    onChange={(e) => handleCheckboxChange(record.key, 'monday', e.target.checked)}
                />
            ),
        },
        {
            title: 'Tuesday',
            dataIndex: 'tuesday',
            key: '2',
            align: 'center',
            render: (_, record) => (
                <Checkbox
                    checked={record.tuesday}
                    onChange={(e) => handleCheckboxChange(record.key, 'tuesday', e.target.checked)}
                />
            ),
        },
        {
            title: 'Wednesday',
            dataIndex: 'wednesday',
            key: '3',
            align: 'center',
            render: (_, record) => (
                <Checkbox
                    checked={record.wednesday}
                    onChange={(e) => handleCheckboxChange(record.key, 'wednesday', e.target.checked)}
                />
            ),
        },
        {
            title: 'Thursday',
            dataIndex: 'thursday',
            key: '4',
            align: 'center',
            render: (_, record) => (
                <Checkbox
                    checked={record.thursday}
                    onChange={(e) => handleCheckboxChange(record.key, 'thursday', e.target.checked)}
                />
            ),
        },
        {
            title: 'Friday',
            dataIndex: 'friday',
            key: '5',
            align: 'center',
            render: (_, record) => (
                <Checkbox
                    checked={record.friday}
                    onChange={(e) => handleCheckboxChange(record.key, 'friday', e.target.checked)}
                />
            ),
        },
        {
            title: 'Saturday',
            dataIndex: 'saturday',
            key: '6',
            align: 'center',
            render: (_, record) => (
                <Checkbox
                    checked={record.saturday}
                    onChange={(e) => handleCheckboxChange(record.key, 'saturday', e.target.checked)}
                />
            ),
        },
        {
            title: 'Sunday',
            dataIndex: 'sunday',
            key: '7',
            align: 'center',
            render: (_, record) => (
                <Checkbox
                    checked={record.sunday}
                    onChange={(e) => handleCheckboxChange(record.key, 'sunday', e.target.checked)}
                />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <Button onClick={() => handleDelete(record.key)} >
                    Delete
                </Button>
            ),
        },
    ];


    return (
        <>
            <Typography.Title level={1}>Habits</Typography.Title>

            <Table
                pagination={false}
                bordered={true}
                columns={columns}
                dataSource={data}
                style={{ marginBottom: '2rem' }}
            />

            <Input placeholder="New habit"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                style={{ width: 300, marginRight: 8 }} >
            </Input>
            <Button type='primary' onClick={() => handleAddHabit()}>Add New Habit</Button>
        </>
    )
}