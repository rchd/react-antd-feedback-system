import React, { Component } from 'react';
import  { Form, Icon, Input, Button } from 'antd';

import axios from 'axios';


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalAddTagsForm extends React.Component {
    componentDidMount() {
        // To disable submit button at the beginning.
        this.props.form.validateFields();
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post(
                    'http://127.0.0.1:8000/tagsadd/',
                    values
                ).then(function(response){
                    console.log('OK');
                }).catch(function(error){
                    console.log('Failed');
                });
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('classname') && getFieldError('classname');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDecorator('tagname', {
                        rules: [{ required: true, message: 'Please tagname' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="标签名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        添加标签
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedHorizontalAddTagsForm = Form.create({ name: 'horizontal_login' })(HorizontalAddTagsForm);
export default WrappedHorizontalAddTagsForm;
