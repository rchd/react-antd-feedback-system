import React from 'react';

import {Table,Button,Modal,Popconfirm} from 'antd';

import axios from 'axios';

import SideBar from '../sidebar/sidebar';
import Discussaddform  from './formadd.js';

class DiscussGroup extends React.Component {
    state={
        data:[],
        modalVisible:false,
    }
    constructor(props){
        super(props);
        this.fetchData();

    }
    handleModalCancel=e=>{
        console.log(e);
        this.setState({
            modalVisible:false,
        });
    }
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
        let form=this.refs.getDiscussName;
        form.validateFields((err, values) => {
            if(!err){
                console.log(values);//这里可以拿到数据
                axios.post('http://127.0.0.1:8000/discussgroupadd/',
                    values
                )
                    .then(function (response) {
                        console.log(response['data'])
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                console.log('Received values of form: ', values);
            }
        });
    }

    fetchData=()=>{
        axios.post('http://127.0.0.1:8000/discussgrouplist/', 
            {} 
        ).then((response)=> {
            console.log(response['data'])
            this.setState({
                data:response['data']
            });
        }).catch(function (error) {
            console.log(error);
        });
    }
    render(){
        const columns=[
            {
                title: '讨论组名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '创建时间 ',
                dataIndex: 'timestamp',
                key: 'timestamp',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>
                this.state.data.length >= 1 ? (
                    <Popconfirm title="确定要删除?">
                    </Popconfirm>
                ) : null,
            },
        ]
        return(
            <SideBar 
                title="讨论组"
                subtitle="讨论组列表"
            >
                <Button onClick={this.showModal}
                    type="primary">添加</Button>
                <Modal title="添加讨论组"
                    visible={this.state.modalVisible}
                    onOk={this.handleModalOk}
                    onCancel={this.handleModalCancel}
                >
                    <Discussaddform ref='getDiscussName'/> 
                </Modal>
                <Table dataSource={this.state.data} 
                    columns={columns}
                    
                />

        </SideBar>
        );
    }

}

export default DiscussGroup;
