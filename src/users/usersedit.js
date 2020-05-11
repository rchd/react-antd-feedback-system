import React from 'react';

import {Table,Button} from 'antd';
//import {DatePicker} from 'antd';
//import {Input} from 'antd';
//import {Row,Col} from 'antd';
import {Modal} from 'antd';
import {Popconfirm} from 'antd';
import {message} from 'antd';

import axios from 'axios';

import SiderBar from '../sidebar/sidebar'
import './userslist.css'
import AddUser from './useraddform';


class UsersEdit extends React.Component{
    state = {
        filteredInfo: null,
        sortedInfo: null,
        data: [],
        pagination: {},
        loading: false,
        confirmDirty: false,
        autoCompleteResult: [],
        selectedRowKeys:[],
        modalVisible:false,
    };


    constructor(props){
        super(props);
        this.fetchData();
    }
    fetchData=()=>{
        this.setState({ loading: true });
        axios.post('http://127.0.0.1:8000/userlist/',
            {}
        )
            .then((response)=> {
                console.log(response['data'])
                this.setState({
                    data:response['data']
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({ loading: false});
    };

    showModal=()=>{
        this.setState({
            modalVisible:true,
        });
    }
    handleModalOk=e=>{
        console.log(e);
        this.setState({
            modalVisible:false,
        });
        let form=this.refs.getUserInfo;
        form.validateFields((err, values) => {
            if(!err){
                const key='updatable';
                console.log(values);//这里可以拿到数据
                message.loading({ content: 'Loading...', key });
                axios.post('http://127.0.0.1:8000/registe/',
                    values
                )
                    .then(function (response) {
                        console.log(response['data'])
                        if(response['data']==='success')
                            message.success({
                                content: '注册成功!',
                                key, duration: 2 });
                    })
                    .catch(function (error) {
                        console.log(error);
                        message.success({
                            content: '注册失败!',
                            key, duration: 2 });
                    });
                console.log('Received values of form: ', values);
            }
        });
    }

    handleModalCancel=e=>{
        console.log(e);
        this.setState({
            modalVisible:false,
        });
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    clearFilters = () => {
        this.setState({ filteredInfo: null });
    };

    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };

    onChnageDate=(date,dateString)=>{
        console.log(date,dateString);
    }

    handleDelete = _id=> {
        const key='updatable';
        message.loading({ content: 'Loading...', key});
        const data= [...this.state.data];
        console.log(_id);
        axios.post('http://127.0.0.1:8000/userdel/',
            _id
        )
            .then((response)=> {
                console.log(response);
                this.setState({ data: data.filter(item => item._id!== _id) });
                message.success({
                    content: '删除成功!',
                    key, duration: 2 });
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    handleBatchDelete=()=>{
        console.log(this.state.selectedRowKeys);
        const data=this.state.data;
        const sign=this.state.selectedRowKeys.length;
        for(var i=0;i<sign;i++)
        {
            data.splice(i,1);
        };
        this.setState({data:data});
        this.setState({selectedRowKeys:[]});
    };

    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: '用户名',
                dataIndex: 'nickname',
                key: 'name',
                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                filteredValue: filteredInfo.name || null,
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: '地址',
                dataIndex: 'city',
                key: 'city',
                filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
                filteredValue: filteredInfo.address || null,
                onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title:'邮箱',
                dataIndex:'email',
                key:'email',
                ellipsis: true,
            },
            {
                title:'手机',
                dataIndex:'telephone',
                key:'telephone',
                ellipsis: true,
            },
            {
                title:'密码',
                dataIndex:'password',
                key:'password',
                ellipsis: true,
            },
            {
                title:'网站',
                dataIndex:'website',
                key:'website',
                ellipsis: true,
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>
                this.state.data.length >= 1 ? (
                    <Popconfirm title="确定要删除?"
                        onConfirm={() => this.handleDelete(record.id)}>
                        <a>删除</a>
                    </Popconfirm>
                ) : null,
            },
        ];

        const {selectedRowKeys} = this.state.selectedRowKeys;

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({selectedRowKeys:selectedRowKeys});
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (
            <SiderBar defaultSelectedKeys={['4']}
                title="用户"
                subtitle="用户编辑"
            >
                <Button type="primary" 
                        onClick={this.handleBatchDelete}
                >
                    批量删除
                </Button>
                <Button type="primary"
                    onClick={this.showModal}>
                    添加新用户
                </Button>
                <Modal title="添加新用户"
                    visible={this.state.modalVisible}
                    onOk={this.handleModalOk}
                    onCancel={this.handleModalCancel}
                >
                <AddUser ref="getUserInfo" /> 
                </Modal>
                <div>
                    <div className="table-operations">
                        {
                            //<Button onClick={this.setAgeSort}>Sort age</Button>
                            //<Button onClick={this.clearFilters}>Clear filters</Button>
                            //<Button onClick={this.clearAll}>Clear filters and sorters</Button>
                        }
                    </div>
                    <Table columns={columns}
                        rowSelection={rowSelection}
                        dataSource={this.state.data}
                        onChange={this.handleChange}
                        scroll={{x:1500,y:0}}
                    />
                </div>
            </SiderBar>
        );
    }

}
export default UsersEdit;

