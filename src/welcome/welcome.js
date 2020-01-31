import React, { Component } from 'react';
import {Col,Row,Card} from 'antd';
import {Table,Button} from 'antd';

import SiderBar from '../sidebar/sidebar'


const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		render: text => <a>{text}</a>,
	},
	{
		title: 'Cash Assets',
		className: 'column-money',
		dataIndex: 'money',
	},
];

const data = [
	{
		key: '1',
		name: 'John Brown',
		money: '￥300,000.00',
	},
	{
		key: '2',
		name: 'Jim Green',
		money: '￥1,256,000.00',
	},
	{
		key: '3',
		name: 'Joe Black',
		money: '￥120,000.00',
	},
];


const gridStyle = {
	width: '25%',
	textAlign: 'center',
};


class Welcome extends React.Component{
	state = {
		collapsed: false,
	};

	onCollapse = collapsed => {
		console.log(collapsed);
		this.setState({ collapsed });
	};


	render(){

		return(
			<SiderBar collapsed={this.state.collapsed}
			onCollapse={this.onCollapse}
			defaultSelectedKeys={['1']}>



			<Card title="Card Title">
			<Card.Grid style={gridStyle}>Content</Card.Grid>
			<Card.Grid hoverable={false} style={gridStyle}>
			Content
			</Card.Grid>
			<Card.Grid style={gridStyle}>Content</Card.Grid>
			<Card.Grid style={gridStyle}>Content</Card.Grid>
			</Card>

			<Table
			columns={columns}
			dataSource={data}
			bordered
			pagination={false}
			title={() => 'Header'}
			footer={() => 'Footer'}
			/>


			</SiderBar>

		);
	}
}

export default Welcome;
