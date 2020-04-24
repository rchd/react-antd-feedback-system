import React, { Component } from 'react';


import SideBar from './sidebar';
import FormComment from './commentform'


class UserComment extends React.Component{
    render(){
        return (
            <SideBar
                title="新增反馈"
            >
                <FormComment></FormComment>
            </SideBar>
        );
    }

}
export default UserComment;
