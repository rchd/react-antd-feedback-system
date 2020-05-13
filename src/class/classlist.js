import React,{Compoent} from 'react';
import {Popconfirm} from 'antd';
import SiderBar from '../sidebar/sidebar';

import { Table, Divider, Tag } from 'antd';
import axios from 'axios';

import {Card,Row,Col} from 'antd';



class  ClassList extends React.Component{
    state={
        product:[],
        tags:[],
        classes:[],
    }
    constructor(props){
        super(props);
        this.fetchData();
    }
    handleDelete=(op,id)=>{
        const vars={
            id:id,
        }
        let remoteop='http://localhost:8000/';
        switch (op) {
            case 'tagsdel':
                remoteop+='tagsdel/';
                break;
            case 'classdel':
                remoteop+='classdel/';
                break;
            case 'productdel':
                remoteop+='productdel/';
                break;
            default:
                console.log(op);
        } 
        console.log(remoteop);
        console.log(vars);
        axios.post(remoteop,id).then((response)=>{
            console.log(response['data']);
        }).catch(function(error){
            console.log(error);
        })
    }




    fetchData=()=>{
        axios.post('http://127.0.0.1:8000/productlist/', 
            {} 
        ).then((response)=> {
            console.log(response['data'])
            this.setState({
                product:response['data']
            });
        }).catch(function (error) {
            console.log(error);
        });


        axios.post('http://127.0.0.1:8000/tagslist/', 
            {} 
        ).then((response)=> {
            console.log(response['data'])
            this.setState({
                tags:response['data']
            });
        }).catch(function (error) {
            console.log(error);
        });

        axios.post('http://127.0.0.1:8000/classlist/', 
            {} 
        ).then((response)=> {
            console.log(response['data'])
            this.setState({
                classes:response['data']
            });
        }).catch(function (error) {
            console.log(error);
        });
    };

    render(){
        const TagsColumns=[
            {
                title:'标签名',
                dataIndex:'tagname',
                key:'tagname',
            },
            {
                title:'修改时间',
                dataIndex:'timestamp',
                key:'timestamp',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Popconfirm title="确定要删除?"
                        onConfirm={() => this.handleDelete('tagsdel',record.id)}>
                        删除
                    </Popconfirm>
                ),
            },
        ]

        const ClassColumns=[
            {
                title:'类名',
                dataIndex:'classname',
                key:'classname',
            },
            {
                title:'修改时间',
                dataIndex:'timestamp',
                key:'timestamp',

            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Popconfirm title="确定要删除?"
                        onConfirm={() => this.handleDelete('classdel',record.id)}>
                        删除
                    </Popconfirm>
                ),
            },

        ]


        const ProductColumns = [
            {
                title: '产品名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '类别',
                dataIndex: 'classes',
                key: 'classes',
            },
            {
                title: '厂商',
                dataIndex: 'vendor',
                key: 'vendor',
            },
            //{
            //title: '标签',
            //key: 'tags',
            //dataIndex: 'tags',
            //render: tags => (
            //<span>
            //{tags.map(tag => {
            //let color = tag.length > 5 ? 'geekblue' : 'green';
            //if (tag === 'loser') {
            //color = 'volcano';
            //}
            //return (
            //<Tag color={color} key={tag}>
            //{tag.toUpperCase()}
            //</Tag>
            //);
            //})}
            //</span>
            //),
            //},
            {
                title:'修改时间',
                dataIndex:'timestamp',
                key:'timestamp',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Popconfirm title="确定要删除?"
                        onConfirm={() => this.handleDelete('productdel',record.id)}>
                        删除
                    </Popconfirm>
                ),
            },
        ];
        return ( 
            <SiderBar defaultSelectedKeys={['10']}
                title="分类" 
                subtitle="分类信息"
            >
                    <div >
                        <Row gutter={16}>
                            <Col span={12}>
                                <Card title="分类列表" bordered={false}>
                                    <Table columns={ClassColumns} dataSource={this.state.classes} />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="标签列表" bordered={false}>
                                    <Table columns={TagsColumns} dataSource={this.state.tags} />
                                </Card>
                            </Col>
                        </Row>
                        <Card title=" 产品列表" bordered={false}>
                            <Table columns={ProductColumns} dataSource={this.state.product} />
                        </Card>
                    </div>

                </SiderBar>
        );
    };

}

export default ClassList;


