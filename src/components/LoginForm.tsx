import React, {FC, useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";



const LoginForm: FC = () => {

    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions();
    const  submit = () => {
        login(username, password)
    }
    return (
        <Form
        onFinish={submit}
        >

            {error && <div style={{color: 'red'}}>{error}</div>}

            <Form.Item
                label="Имя Пользователя"
                name="username"
                rules={[ rules.required() ]}
            >
                <Input value={username}
                       onChange={(e) =>
                           setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[ rules.required() ]}
            >
                <Input value={password}
                       onChange={(e) =>
                           setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item
                name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;