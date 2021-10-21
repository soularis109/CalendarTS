import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";

const EventForm: FC = () => {
    const [description, setDescription] = useState('')
    return (
        <Form>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input value={description}
                       onChange={(e) =>
                           setDescription(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required()]}>
                <DatePicker />
                <Form.Item
                    label="Дата события"
                    name="date"
                    rules={[rules.required()]}>
                <Select defaultValue="lucy" >
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="disabled" disabled>
                        Disabled
                    </Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
            </Form.Item>
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button
                        type="primary" htmlType="submit" >
                        Создать
                    </Button>
                </Form.Item>
            </Row>

        </Form>
    );
};

export default EventForm;