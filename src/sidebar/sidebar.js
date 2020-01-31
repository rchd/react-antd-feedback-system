import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Avatar,Popover} from 'antd'
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
//import logo from '../logo.svg';
import './sidebar.css';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const text = <span>Title</span>;
const content = (
	<div>
	<p>Content</p>
	<p>Content</p>
	</div>
);


function SiderBar(props) {
	return (
		<Layout style={{ minHeight: '100vh' }}>
		<Sider collapsible collapsed={props.collapsed} onCollapse={props.onCollapse}>
		<div className="logo" />
		<Menu theme="dark" defaultSelectedKeys={props.defaultSelectedKeys} mode="inline">
		<Menu.Item key="1">
		<Icon type="pie-chart" />
		<span>
		<Link to='/welcome'>	Option 1</Link>
		</span>
		</Menu.Item>
		<Menu.Item key="2">
		<Icon type="desktop" />
		<span>
		<Link to='/charts'>Option 2</Link>
		</span>
		</Menu.Item>
		<SubMenu
		key="sub1"
		title={
			<span>
			<Icon type="user" />
			<span>User</span>
			</span>
		}
		>
		<Menu.Item key="3">Tom</Menu.Item>
		<Menu.Item key="4">Bill</Menu.Item>
		<Menu.Item key="5">Alex</Menu.Item>
		</SubMenu>
		<SubMenu
		key="sub2"
		title={
			<span>
			<Icon type="team" />
			<span>Team</span>
			</span>
		}
		>
		<Menu.Item key="6">Team 1</Menu.Item>
		<Menu.Item key="8">Team 2</Menu.Item>
		</SubMenu>
		<Menu.Item key="9">
		<Icon type="file" />
		<span>File</span>
		</Menu.Item>
		</Menu>
		</Sider>

		<Layout>
		<Header style={{ background: '#fff', textAlign:'right'}} >
		<Popover placement="bottomRight" title={text} content={content} trigger="hover">
		<Avatar size="large" icon="user" />
		</Popover>
		</Header>
		<Content style={{ margin: '0 16px' }}>
		<Breadcrumb style={{ margin: '16px 0' }}>
		<Breadcrumb.Item>User</Breadcrumb.Item>
		<Breadcrumb.Item>Bill</Breadcrumb.Item>
		</Breadcrumb>
		<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

		{props.children}

		</div>
		</Content>
		<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
		</Layout>
		</Layout>
	);
}
export default SiderBar;

//ReactDOM.render(<SiderDemo />, mountNode);
