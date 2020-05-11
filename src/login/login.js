import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import  { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Row,Col} from 'antd';
import {Card} from 'antd';

import axios from 'axios';

import './login.css'

const {Meta} = Card;


class LoginForm extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            axios.post('http://127.0.0.1:8000/login/', 
                values
            )
                .then(function (response) {
                    console.log(response);
                    window.location.href='http://localhost:3000/welcome';
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            //<div className="login-form-main">
            <Row type="flex" justify="center" align="middle" style={{minHeight:'80vh'}}>
            <Col>
            <Card title = "登录"  
                style= {{width:500, textAlign:"center"}}> 
                    <Row type="flex" justify="center" align="middle">
                        <Col >
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" 
                                                style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="用户名"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" 
                                                style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="密码"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('admin', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>管理员</Checkbox>)}
                                    <a className="login-form-forgot" href="">
                                        忘记密码
                                    </a>
                                    <Button type="primary" htmlType="submit" 
                                        className="login-form-button">
                                        登录
                                    </Button>
                                    或
                                    <Link to="/registe"	>
                                        注册
                                    </Link>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
            </Card>  
        </Col>
    </Row>
        );
    }
}
const NormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default NormalLoginForm;
