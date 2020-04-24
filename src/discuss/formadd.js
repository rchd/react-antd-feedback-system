import React from 'react';
import { Form, Select, Input, Button } from 'antd';

const { Option } = Select;

class App extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleSelectChange = value => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="讨论组名称">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入信息' }],
                    })(<Input />)}
                </Form.Item>
            </Form>
        );
    }
}
const Discussaddform= Form.create({ name: 'coordinated' })(App);

export default Discussaddform;
