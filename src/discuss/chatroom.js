import React from 'react'

import {Row,Col} from 'antd';
import { Input,Button } from 'antd';

import $ from 'jquery';

//import axios from 'axios';
//import Websocket from 'react-websocket';


import SiderBar from '../sidebar/sidebar';

const { TextArea } = Input;

class ChartRoomAdmin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            message:"",
        }
        this.sendMsg=this.sendMsg.bind(this);
    }
    sendMsg=()=>{
        var socket= new WebSocket("ws://127.0.0.1:8000/chatroom/");
        socket.onopen = function () {
            console.log('WebSocket open');//成功连接上Websocket
            socket.send($("#msg").val());//发送数据到服务端
        };
        socket.onmessage = function (e) {
            console.log('message: ' + e.data);//打印服务端返回的数据
            $('#msgbox').append( e.data + '\n');
        };
    }

    inputValue=(e)=>{
        this.setState({
            message:e.target.value
        });
    }

    WebSocketTest=()=> {
        if ("WebSocket" in window) {
            alert("您的浏览器支持 WebSocket!");
            // 打开一个 web socket
            var ws = new WebSocket("ws://127.0.0.1:8000/chatroom/");
            ws.onopen = function () {
                // Web Socket 已连接上，使用 send() 方法尝试发送数据
                ws.send("test");
            };
            //监听服务端是否有消息发送过来，当有消息时执行方法
            ws.onmessage = function (evt) {
                //获取服务器发来的消息
                var received_msg = evt.data;
                //显示消息
                alert("收到消息："+received_msg)
            };
            //关闭页面或其他行为导致与服务器断开链接是执行
            ws.onclose = function () {
                // 关闭 websocket
                alert("连接已关闭...");
            };
        } else {
            // 浏览器不支持 WebSocket
            alert("您的浏览器不支持 WebSocket!");
        }
    }

    render(){
        return (
            <SiderBar>
                <Row gutter={[16,16]}>
                    <Col>
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
export default ChartRoomAdmin;
