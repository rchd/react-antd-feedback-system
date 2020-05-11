import React   from 'react';
import {Card} from 'antd';
import {Table} from 'antd';
import {Statistic} from 'antd';
import {Steps } from 'antd';
//import {Typography } from 'antd';
import {Row,Col} from 'antd';

import SiderBar from '../sidebar/sidebar'
import './welcome.css';

const {Step}=Steps;

//const { Typography } = antd;

//const { Title } = Typography;

const columns = [
    {
        title: '相关软件',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '版本号',
        className: 'column-money',
        dataIndex: 'money',
    },
];

const data = [
    {
        key: '1',
        name: '服务器地址',
        money: 'www.rchd.xyz',
    },
    {
        key: '2',
        name: '操作系统',
        money: 'LINUX',
    },
    {
        key: '3',
        name: '运行环境',
        money: 'Apache',
    },
    {
        key: '4',
        name: 'Pyhton版本',
        money: '3.6',
    },
    {
        key: '5',
        name: 'Pyhton运行方式',
        money: 'wsgi',
    },
    {
        key: '6',
        name: 'Mongo版本',
        money: '3',
    },
    {
        key: '7',
        name: 'Django版本',
        money: '3',
    },

];


const gridStyle = {
    width: '100%',
    textAlign: 'center',
};


class Welcome extends React.Component{

    render(){

        return(
            <SiderBar defaultSelectedKeys={['1']}

                title=""
                subtitle=""
            >
                    <Row >
                        <Card title="待办">
                            <Row type="flex">
                                <Col md={12} lg={6}>
                                    <Card.Grid style={gridStyle}>
                                        {
                                            //<Title level={1}>反馈总数</Title>
                                            //<Title level={4}>300</Title>

                                        }
                                            <Statistic title="需处理" value={123456}/>
                                        </Card.Grid>
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <Card.Grid  style={gridStyle}>
                                            {
                                                //<Title level={1}>待处理数</Title>
                                                //<Title level={4}>300</Title>
                                            }
                                                <Statistic title="已处理" value={123456}/>
                                            </Card.Grid>
                                        </Col>
                                        <Col md={12} lg={6}>
                                            <Card.Grid style={gridStyle}>
                                                {
                                                    //<Title level={1}>用户数量</Title>
                                                    //<Title level={4}>300</Title>
                                                }
                                                    <Statistic title="用户数" value={123456}/>
                                                </Card.Grid>
                                            </Col>
                                            <Col md={12} lg={6}>
                                                <Card.Grid style={gridStyle}>
                                                    {
                                                        //<Title level={1}>已完成</Title>
                                                        //<Title level={4}>300</Title>
                                                    }
                                                        <Statistic title="讨论组数" value={123456}/>
                                                    </Card.Grid>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Row>
                                    <div className="welcome">
                                        <Table
                                            columns={columns}
                                            dataSource={data}
                                            bordered
                                            pagination={false}
                                            title={() => '系统信息'}
                                            footer={() => 'Footer'}
                                        />
                                            </div>

                                            <Card title="进度 ">
                                                <Row type="flex">
                                                    <Col mg={24} lg={24}>
                                                        <Steps
                                                            type="navigation"
                                                            size="small"
                                                        >
                                                                <Step
                                                                    title="Step 1"
                                                                    subTitle="00:00:05"
                                                                    status="finish"
                                                                    description="用户提交反馈"
                                                                />
                                                                <Step
                                                                    title="Step 2"
                                                                    subTitle="00:01:02"
                                                                    status="process"
                                                                    description="管理员审核反馈"
                                                                />
                                                                <Step
                                                                    title="Step 3"
                                                                    subTitle="waiting for longlong time"
                                                                    status="wait"
                                                                    description="完成反馈"
                                                                />
                                                        </Steps>
                                                    </Col>
                                                </Row>
                                            </Card>
                                    </SiderBar>
        );
    }
}

export default Welcome;
