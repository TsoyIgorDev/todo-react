import { Typography, Checkbox, Divider, Drawer, Button, Form, Input, } from 'antd';
import CustomButton from '../CustomButton.jsx'
import { todays } from '../../data.js'
import React, { useState } from 'react';

const { TextArea } = Input;

export default function TodaySection() {
    const [tasks, setTasks] = useState(todays)
    const [currentTask, setCurrentTask] = useState(null)
    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false)
    const [form] = Form.useForm()

    const showDrawer = () => {
        setOpen(true)
    };
    const onClose = () => {
        setOpen(false)
        form.resetFields()
        setIsEditing(false)
        setCurrentTask(null)
    };

    const handleCheckboxChange = (key) => (e) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.key === key ? { ...task, isDone: e.target.checked } : task
            )
        );
    };

    const handleAddClick = () => {
        form.resetFields();
        setCurrentTask(null)
        setIsEditing(false)
        showDrawer()
    }

    const handleEditClick = (task) => {
        setCurrentTask(task)
        form.setFieldsValue({
            title: task.title,
            description: task.description,
        })
        showDrawer()
        setIsEditing(true)
    }

    const handleFormSave = (values) => {
        if (isEditing && currentTask) {
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.key === currentTask.key ? { ...task, ...values } : task))
        } else {
            const newTask = {
                key: Date.now(),
                ...values,
                isDone: false
            }
            setTasks(prev => [...prev, newTask])
        }
        onClose()
    }

    const handleFormDelete = (key) => {
        setTasks(prevTasks =>
            prevTasks.filter(task =>
                task.key !== key))
        onClose()
    }

    return (
        <>
            <Typography.Title level={1}>Today</Typography.Title>

            <CustomButton style={{ padding: '30px' }} onClick={handleAddClick}>
                <img src="/images/add.svg" alt="" style={{ height: '20px', marginRight: 8 }} />
                Add New Task
            </CustomButton>
            <Divider />

            {tasks.map(({ key, title, description, isDone }) => (
                <React.Fragment key={key}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Checkbox
                            onChange={handleCheckboxChange(key)}
                            checked={isDone}
                            style={{ marginRight: 8 }}
                        >
                            <span style={isDone ? { textDecoration: 'line-through' } : {}}>
                                {title}
                            </span>
                        </Checkbox>

                        <div>
                            <Button onClick={() => handleEditClick({ key, title, description })} style={{ padding: '0.2rem 0.3rem' }}>
                                <img src="/images/edit.svg" alt="" style={{ height: '20px' }} />
                            </Button>
                            <Button onClick={() => handleFormDelete(key)} style={{ padding: '0.2rem 0.3rem', marginLeft: '0.5rem' }}>
                                <img src="/images/delete.svg" alt="" style={{ height: '20px' }} />
                            </Button>
                        </div>
                    </div>
                    <Divider />
                </React.Fragment>
            ))}

            <Drawer
                title={isEditing ? "Edit task" : "Add new task"}
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={open}
            >
                <Form
                    form={form}
                    name="basic"
                    layout='vertical'
                    requiredMark='optional'
                    size='default'
                    onFinish={handleFormSave}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input title' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <TextArea placeholder="You can add a description" rows={4} />
                    </Form.Item>

                    <Form.Item label={null} style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    )
}