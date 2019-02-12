import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
		<ul style={{display:this.props.isLogin?"block":"none"}}>
			<li style={{display:this.props.isLogin?"none":"block"}}>
				<Link to="/">登录</Link>
			</li>
			<li>
				<Link to="/Home">主页</Link>
			</li>
			<li>
				<Link to="/About">关于我们</Link>
			</li>
			<li>
				<Link to="/News">新闻页面</Link>
			</li>
			<li>
				<Link to="/PageShow">分页演示</Link>
			</li>
		</ul>
    );
  }
}

export default Nav;