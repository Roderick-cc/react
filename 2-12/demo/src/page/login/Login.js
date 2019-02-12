import React, { Component } from 'react';

//=====组件=====

class Login extends Component {
	
	render() {
		return (
			<div>
				<h3>登录页面</h3>
				<div>
					用户名<input type="text" ref="username" />
				</div>
				<div>
					密码<input type="password" ref="password" />
				</div>
				<div>
					<button onClick={this.goLogin.bind(this)}>登录</button>
				</div>
			</div>
		);
	}
	
	goLogin(){
		this.props.GOLOGIN();
	}
	
	componentDidMount() {
	  	console.log("Login渲染完毕")
	}
	
}


export default Login