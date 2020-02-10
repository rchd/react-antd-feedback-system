import React from 'react';

import {Table,Button} from 'antd';
import {DatePicker} from 'antd';
import {Input} from 'antd';
import {Row,Col} from 'antd';

import SiderBar from '../sidebar/sidebar'
import './userslist.css'

const {RangePicker} =DatePicker;
const {Search}=Input;

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

class UsersList extends React.Component{
    state = {
        filteredInfo: null,
        sortedInfo: null,
    };

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
            <SiderBar defaultSelectedKeys={['3']}
                       title="用户"
                       subtitle="用户列表"
            >
            <div>
                <div className="table-operations">
                    <Row gutter={[8,8]}>
                        <Col md={24} lg={8}>
                            <RangePicker onChange={this.onChnageDate} />
                        </Col>
                        <Col md={24} lg={8}>
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                            />
                        </Col>
                    </Row>
                    {
                        //<Button onClick={this.setAgeSort}>Sort age</Button>
                        //<Button onClick={this.clearFilters}>Clear filters</Button>
                        //<Button onClick={this.clearAll}>Clear filters and sorters</Button>
                    }
                </div>
                <Table columns={columns} 
                    dataSource={data}
                    onChange={this.handleChange} 
                    scroll={{x:1500,y:0}}
                />
            </div>
        </SiderBar>
        );
    }

}
export default UsersList;

