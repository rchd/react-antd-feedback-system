import React from 'react'

import {Row,Col} from 'antd';
import { Input,Button } from 'antd';

import $ from 'jquery';

import axios from 'axios';

//import Websocket from 'react-websocket';

import SiderBar from '../sidebar/sidebar';

const { TextArea } = Input;

class DiscussChatRoomAdmin extends React.Component {
    constructor(props){
        super(props);

        this.state={
            message:"",
        }
        this.sendMsg=this.sendMsg.bind(this);
        this.fetchData();
    }
    sendMsg=()=>{
        let group=this.props.match.params.name;
        let message=$('#msg').val();
        const data={
            group:group,
            message:message,
        }
        axios.post('http://127.0.0.1:8000/discussgroupmsg/',
            data).then((response)=>{
                console.log(response['data'])
            }).catch(function(error){
                console.log(error)
            });
    }

    inputValue=(e)=>{
        this.setState({
            message:e.target.value
        });
    }
    fetchData=()=>{
        let group=this.props.match.params.name;
        const param={
            name:group,
        } 
        axios.post('http://127.0.0.1:8000/discussgroupmsglist/', 
            param
        ).then((response)=> {
            console.log(response['data'])
        }).catch(function (error) {
            console.log(error);
        });
    }


    render(){
        return (
            <SiderBar>
                <Row gutter={[16,16]}>
                    <Col>
                        <h2>{this.props.match.params.name}讨论组</h2>
                        <TextArea id="msgbox"  rows={30} />
                    </Col>
                </Row>
                <Row gutter={[16,16]}>
                    <Col span={21}>
                        <Input id="msg" ref='message' placeholder="请输入要发送的内容" />
                    </Col>
                    <Col span={3}>
                        <Button
                            onClick={this.sendMsg}
                            type="primary">发送</Button>
                    </Col>
                </Row>
            </SiderBar>
        )
    }

}
export default DiscussChatRoomAdmin;
