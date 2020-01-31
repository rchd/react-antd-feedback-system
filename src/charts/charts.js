import React, { Component } from 'react';
import SiderBar from '../sidebar/sidebar'

class Charts extends React.Component{
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
				   defaultSelectedKeys={['2']}>
			charts page
			
			</SiderBar>

		);
	}
}

export default Charts;
