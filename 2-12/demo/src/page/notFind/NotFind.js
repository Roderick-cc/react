import React, { Component } from 'react';

//=====组件=====

class NotFind extends Component {
	
	render() {
		return (
			<div>
				<h3>404</h3>
			</div>
		);
	}
	
	componentDidMount() {
	  	console.log("NotFind渲染完毕")
	}
	
}


export default NotFind