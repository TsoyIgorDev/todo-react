import { Typography, Divider, Modal, Card, Button, Flex, Tag, Form, Input } from 'antd';
import CustomButton from '../CustomButton';
import { useState } from 'react';
import { diaries } from '../../data';

export default function DiarySection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState(diaries)
    const [currentDiary, setCurrentDiary] = useState(null)
    const [form] = Form.useForm()

    const { TextArea } = Input;

    const handleAddClick = () => {
        setIsModalOpen(true);
        setCurrentDiary(null);
        form.resetFields();
    }

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSave = (values) => {
        if (currentDiary) {
            setData(prevData =>
                prevData.map(data =>
                    data.key === currentDiary.key ? { ...data, ...values } : data))
        } else {
            const newDiary = {
                key: Date.now(),
                ...values,
                isDone: false
            }
            setData(prev => [...prev, newDiary])
        }
        setIsModalOpen(false)
    }

    const handleMoreClick = (diary) => {
        console.log(diary)
        setCurrentDiary(diary)
        form.setFieldsValue({
            date: diary.date,
            description: diary.description
        })
        setIsModalOpen(true);
    }

    const handleDel = (key) => {
        setData(prevData =>
            prevData.filter(data =>
                data.key !== key
            )
        )
        setIsModalOpen(false)
    }


    return (
        <>
            <Typography.Title level={1}>Diary</Typography.Title>

            <CustomButton style={{ padding: '30px' }} onClick={handleAddClick}>
                <img src="/images/add.svg" alt="" style={{ height: '20px', marginRight: 8 }} />
                Add New Diary
            </CustomButton>
            <Divider />

            <Flex wrap gap="small" justify='space-evenly'>
                {data.map(({ key, date, description, tag }) => {
                    return (
                        <Card key={key} title={date} extra={<Button onClick={() => handleMoreClick({ key, date, description, tag })}>More</Button>} style={{ width: 300 }}>
                            <p>{description.substring(0, 140)}...</p>
                            {tag == 'good' && <Tag color="green" style={{}}>Good Day</Tag>}
                            {tag == 'default' && <Tag color="gold" style={{}}>Default Day</Tag>}
                            {tag == 'bad' && <Tag color="red" style={{}}>Bad Day</Tag>}
                        </Card>
                    )
                })}

            </Flex>

            <Modal
                title="Diary"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="del" type="primary" onClick={() => handleDel(currentDiary?.key)}>
                        Delete
                    </Button>,
                    <Button key="save" type="primary" htmlType="submit" form="diaryForm">
                        Save
                    </Button>
                ]}
            >
                <Form
                    id="diaryForm"
                    form={form}
                    name="basic"
                    layout='vertical'
                    requiredMark='optional'
                    size='default'
                    onFinish={handleSave}
                >
                    <Form.Item
                        label="Date"
                        name="date"
                        rules={[{ required: true, message: 'Please input data' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <TextArea placeholder="You can add a description" rows={7} />
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}