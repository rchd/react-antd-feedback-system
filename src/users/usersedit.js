import React from 'react';

import {Table,Button} from 'antd';
import {DatePicker} from 'antd';
import {Input} from 'antd';
import {Row,Col} from 'antd';
import {Modal} from 'antd';

import SiderBar from '../sidebar/sidebar'
import './userslist.css'


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

class UsersEdit extends React.Component{
    state = {
        filteredInfo: null,
        sortedInfo: null,
        modalVisible:false,
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

    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: '用户名',
                dataIndex: 'name',
                key: 'name',
                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                filteredValue: filteredInfo.name || null,
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
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
                title:'注册日期',
                dataIndex:'registeDate',
                key:'registeDate',
                ellipsis: true,
            }


        ];
        return (
            <SiderBar defaultSelectedKeys={['4']}
                title="用户"
                subtitle="用户编辑"
            >
                <Button type="primary" >
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
                    <Input></Input>  
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
                        dataSource={data}
                        onChange={this.handleChange} 
                        scroll={{x:1500,y:0}}
                    />
                </div>
            </SiderBar>
        );
    }

}
export default UsersEdit;

