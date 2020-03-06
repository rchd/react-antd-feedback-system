import React, { Component } from 'react';
import {Card} from 'antd';
import {Table} from 'antd';
import {Typography } from 'antd';
import {Row,Col} from 'antd';

import SiderBar from '../sidebar/sidebar';
import WrappedHorizontalAddClassForm from './addclass';
import WrappedAddProductForm from './addproduct';
import WrappedHorizontalAddTagsForm from './addtags';


import '../welcome/welcome.css';

//const { Typography } = antd;


class ClassEdit extends React.Component{

    render(){
        return(
            <SiderBar defaultSelectedKeys={['7']}
                    title="分类"
                    subtitle="添加分类"
                >
                    <Card title="添加分类">
                <Row>
                    <Col>
                        <WrappedHorizontalAddClassForm />
                    </Col>
                </Row>
            </Card>
            <Card className="welcome" title="添加产品">
                
                <Row>
                    <Col>
                        <WrappedAddProductForm />
                    </Col>
                </Row>
            </Card>
            <Card className="welcome" title="添加标签">
                <Row>
                    <Col>
                        <WrappedHorizontalAddTagsForm />
                    </Col>
                </Row>
            </Card>
            </SiderBar>
        );
    }
}

export default ClassEdit;
