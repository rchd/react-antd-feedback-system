import React from 'react';

import SideBar from '../sidebar/sidebar'

class CommentList extends React.Component{

    render(){
        return(
            <SideBar
                defaultSelectedKeys='{[6]}'
                        title="反馈"
                        subtitle="反馈列表"
            >
                iowepurqi
            </SideBar>
        );
    }

}
export default CommentList;
