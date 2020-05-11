import React from 'react';
import {Link} from 'react-router-dom';

import {Table,Popconfirm} from 'antd';

//import {message} from 'antd';
import axios from 'axios';

import SideBar from './sidebar';
//import Discussaddform  from './formadd.js';

class UserDiscussGroup extends React.Component {
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
                title: '进入聊天室',
                dataIndex: 'name',
                key: 'name',
                render:(text,record)=>
                //<Link to={{pathname:'/discussgroupmsg/',query:{name:record.name}}}>
                <Link to={'/discussgruopmsguser/'+record.name}>
                    {record.name}
                </Link>
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
        ]
        return(
            <SideBar 
                title="讨论组"
                subtitle="讨论组列表"
            >
                <Table dataSource={this.state.data} 
                    columns={columns}
                    
                />

        </SideBar>
        );
    }

}

export default UserDiscussGroup;
