import React from 'react';

import {Table,Tag,Switch} from 'antd';

import axios from 'axios';

import SideBar from '../sidebar/sidebar'


class CommentList extends React.Component{
    state={
        data:[],
    }
    constructor(props){
        super(props);
        this.fetchData();
    }

    check=(id)=>{
        console.log(id);
        axios.post('http://127.0.0.1:8000/commentcheck/',
            id).then((response)=>{
                console.log(response['data'])
            }).catch(function(error) {
                console.log(error); 
            });
    }


    preview = (text) => {
        if (window.previewWindow) {
            window.previewWindow.close()
        }

        window.previewWindow = window.open()
        window.previewWindow.document.write(this.buildPreviewHtml(text))
        window.previewWindow.document.close()

    }
    buildPreviewHtml = (text) => {
        return `
          <!Doctype html>
          <html>
            <head>
              <title>Preview Content</title>
              <style>
                html,body{
                  height: 100%;
                  margin: 0;
                  padding: 0;
                  overflow: auto;
                  background-color: #f1f2f3;
                }
                .container{
                  box-sizing: border-box;
                  width: 1000px;
                  max-width: 100%;
                  min-height: 100%;
                  margin: 0 auto;
                  padding: 30px 20px;
                  overflow: hidden;
                  background-color: #fff;
                  border-right: solid 1px #eee;
                  border-left: solid 1px #eee;
                }
                .container img,
                .container audio,
                .container video{
                  height: auto;
                  max-width: 100%;
                }
                .container p{
                  white-space: pre-wrap;
                  min-height: 1em;
                }
                .container pre{
                  padding: 15px;
                  background-color: #f1f1f1;
                  border-radius: 5px;
                }
                .container blockquote{
                  margin: 0;
                  padding: 15px;
                  background-color: #f1f1f1;
                  border-left: 3px solid #d1d1d1;
                }
              </style>
            </head>
            <body>
              <div class="container">${text}</div>
            </body>
          </html>
        `
    }



    fetchData=()=>{
        axios.post('http://127.0.0.1:8000/commentlist/',
            {}).then((response)=>{
                console.log(response['data']);
                this.setState({
                    data:response['data']
                })
            }).catch(function(error) {
                console.log(error); 
            });
    }

    render(){
        const columns = [
            {
                title:'内容',
                dataIndex:'comment',
                key:'comment',
                render:(text,record)=>(
                    <span>
                        {
                            <a onClick={()=>this.preview(record['comment'])}>
                                {record['comment'].slice(1,20)}
                            </a> 
                            
                        }
                    </span>)

            },
            {
                title:'客户名',
                dataIndex:'user',
                key:'user',
            },
            {
                title:'产品名',
                dataIndex:'product',
                key:'product',
            },
            {
                title:'类别',
                dataIndex:'classes',
                key:'classes',
            },
            {
                title:'标签',
                dataIndex:'tags',
                key:'tags',
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color=tag.length>5?'green':'red';
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                            </span>),

            },
            {
                title:'审核',
                key:'check',
                dataIndex:'check',
                render:(text, record) => (
                    <span>
                        <Switch defaultChecked={record.check==='1'} 
                            onClick={()=>this.check(record.id)}/>
                    </span>
                ),
            },
            {
                title:'插入时间',
                key:'timestamp',
                dataIndex:'timestamp',
            }


        ]

        return(
            <SideBar
                defaultSelectedKeys='{[6]}'
                title="反馈"
                subtitle="反馈列表"
            >
                    <Table columns={columns}
                        dataSource={this.state.data}
                    />

                    </SideBar>
        );
    }

}
export default CommentList;
