import React, { Component } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

import axios from 'axios';


const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class AddProductForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post(
                    'http://127.0.0.1:8000/productadd/',
                    values
                ).then(function(response){
                    console.log(response['data']);
                }).catch(function(error){
                    console.log('Failed');
                });
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        axios.post(
            'http://127.0.0.1:8000/tagslist/',
            {}
        ).then(function(response){
            console.log(response);
            if (!response) {
                autoCompleteResult = [];
            } else {
                autoCompleteResult = ['.com', '.org', '.net'].
                    map(domain => `${value}${domain}`);
                    this.setState({ autoCompleteResult });
            }
            console.log(autoCompleteResult);
        }).catch(function(error){
            console.log('Failed');
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );
        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <Form  onSubmit={this.handleSubmit}>
                <Form.Item >
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true,
                                message: '输入不能为空',
                            },
                        ],
                    })(<Input placeholder='请输入产品名' />)}
                </Form.Item>
                <Form.Item
                >
                    {getFieldDecorator('description', {
                        rules: [{ required: true, message: '输入不能为空', whitespace: true }],
                    })(<Input placeholder='请输入详细描述' />)}
                </Form.Item>
                <Form.Item
                >
                    {getFieldDecorator('vendor', {
                        rules: [{ required: true, message: '输入不能为空', whitespace: true }],
                    })(<Input placeholder='请输入厂商' />)}
                </Form.Item>
                <Form.Item >
                    {getFieldDecorator('tagsname', {
                        rules: [{ required: true, message: '请选择一个标签' }],
                    })(
                        <AutoComplete
                            dataSource={websiteOptions}
                            onChange={this.handleWebsiteChange}
                            placeholder="website"
                        >
                            <Input/>
                        </AutoComplete>,
                    )}
                </Form.Item>
                <Form.Item >
                    {getFieldDecorator('classname', {
                        rules: [{ required: true, message: '请选择一个类别' }],
                    })(
                        <AutoComplete
                            dataSource={websiteOptions}
                            onChange={this.handleWebsiteChange}
                            placeholder="website"
                        >
                            <Input />
                        </AutoComplete>,
                    )}
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                       添加产品 
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedAddProductForm = Form.create({ name: 'register' })(AddProductForm);

export default WrappedAddProductForm

