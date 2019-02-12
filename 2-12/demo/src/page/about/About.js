import React, { Component } from 'react';
import {Redirect,Switch,Link,Route} from 'react-router-dom';

import Phone from './About_Phone.js';
import Content from './About_Content.js';
//=====组件=====

class About extends Component {
	
		
	render() {
		if(this.props.isLogin==false){
			return <Redirect to="/" />
		}
		return (
			<div>
				<h3>关于我们</h3>嵌套路由演示
				<ul>
					<li><Link to="/About/Phone">联系电话</Link></li>
					<li><Link to="/About/Content">公司介绍</Link></li>
				</ul>
				<Switch>			
					<Route path="/About/Phone" component={Phone}/>
					<Route path="/About/Content" component={Content}/>
					<Route path="/About" component={Phone}/>
				</Switch>
			</div>
		);
	}
	
	componentDidMount() {
	  	console.log("About渲染完毕")
	}
	
}


export default About