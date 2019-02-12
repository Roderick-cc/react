import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

//=====组件=====

class Home extends Component {
	
	render() {
		if(this.props.isLogin==false){
			return <Redirect to="/" />
		}
		
		return (
			<div>
				<h3>主页</h3>
				<div>
					<button onClick={this.outLogin.bind(this)}>退出登录</button>
				</div>
			</div>
		);
	}

	outLogin(){
		this.props.OUTLOGIN(this.props.history);
	}
		
	componentDidMount() {
	  	console.log("Home渲染完毕")
	}
	
}


export default Home