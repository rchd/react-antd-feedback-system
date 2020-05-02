import React from 'react';

import {Table,Tag,Switch} from 'antd';

import axios from 'axios';

import SideBar from '../sidebar/sidebar'


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title:'comment',
        dataIndex:'comment',
        key:'comment',
    },
    {
        title:'user',
        dataIndex:'user',
        key:'user',
    },
    {
        title:'product',
        dataIndex:'product',
        key:'product',
    },
    {
        title:'classes',
        dataIndex:'classes',
        key:'classes',
    },
    {
        title:'tags',
        dataIndex:'tags',
        key:'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    //let color = tag.length > 5 ? 'geekblue' : 'green';
                    //if (tag === 'loser') {
                    //color = 'volcano';
                    //}
                    let color='green'
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
                    </span>),

    },
    {
        title:'check',
        key:'check',
        dataIndex:'check',
        render:(text, record) => (
            <span>
                <Switch defaultChecked/>
            </span>
        ),
    },
    {
        title:'timestamp',
        key:'timestamp',
        dataIndex:'timestamp',
    }


]

class CommentList extends React.Component{
    state={
        data:[],
    }
    constructor(props){
        super(props);
        this.fetchData();
    }
    fetchData=()=>{
        axios.post('http://127.0.0.1:8000/commentlist/',
            {}).then((response)=>{
                console.log(response['data']);
                this.setState({
                    data:response['data']
                })
            }).catch(function(error) {
                console.log(error); 
            });
    }

    render(){
        return(
            <SideBar
                defaultSelectedKeys='{[6]}'
                title="反馈"
                subtitle="反馈列表"
            >
                    <Table columns={columns}
                        dataSource={this.state.data}
                    />

                    </SideBar>
        );
    }

}
export default CommentList;
