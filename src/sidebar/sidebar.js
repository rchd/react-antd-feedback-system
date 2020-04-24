import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Avatar,Popover} from 'antd'
import 'antd/dist/antd.css';
import React from 'react';
import {Link} from 'react-router-dom';
//import logo from '../logo.svg';
import './sidebar.css';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const text = <span>设置</span>;
const content = (
    <div>
        <p>登出</p>
        <p>个人信息</p>
    </div>
);

class SiderBar extends React.Component{

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render(){

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible
                    collapsed={this.state.collapsed}
                    trigger={null}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" 
                        defaultSelectedKeys={this.props.defaultSelectedKeys}
                        mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>
                                <Link to='/welcome'>首页</Link>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>
                                <Link to='/charts'>统计</Link>
                            </span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>用户</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3">
                                <Link to="/userlist">
                                    用户列表
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/useredit" >
                                    用户编辑
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="team" />
                                    <span>分类</span>
                                </span>
                            }>
                            <Menu.Item key="7">
                                <Link to="/classadd">添加分类
                                </Link>
                                </Menu.Item>
                                <Menu.Item key="10">
                                    <Link to="/classdetail">
                                        分类信息
                                    </Link>
                                    </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="team" />
                                    <span>反馈</span>
                                </span>
                            }>
                            <Menu.Item key="6">
                                <Link to="/commentlist">反馈列表
                                </Link> 
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Link to="/checkcomment">待审核
                                </Link> 
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="15">
                            <Icon type="file" />
                            <span> 
                            <Link to="/discussgroup">讨论组   
                            </Link> 
                        </span>  
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>文件</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout >
                    <Header style={{ background: '#fff'}} >
                        <div className='header-style'>
                        <h2>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.onCollapse}
                        />
                            
                            后台管理</h2>
                        </div>
                        <div className='header-style' style={{textAlign:'right'}}>
                            <Popover placement="bottomRight" title={text}
                                content={content} trigger="hover">
                                <Avatar size="large" icon="user" />
                            </Popover>
                        </div>
                    </Header>
                    <Content 
                        style={{ margin: '0 16px' ,
                    
                    }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.props.subtitle}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
export default SiderBar;

