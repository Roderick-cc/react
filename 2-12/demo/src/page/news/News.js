import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

//=====组件=====

class News extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		if(this.props.isLogin==false){
			return <Redirect to="/" />
		}
		
		return (
			<div>
				<h3>新闻页面</h3>
				<ul>
					{
						this.props.list.map(function(item,i){
							return <li key={item.id}>
								<a>{item.title}</a>
								<span>{item.con}</span>
							</li>
						})	
					}
				</ul>
				<button onClick={this.SORTREVERSE.bind(this)}>倒叙显示</button>
			</div>
		);
	}
	
	SORTREVERSE(){
		this.props.SORTREVERSE();
	}
	
	componentDidMount() {
	  	console.log("News渲染完毕")
	}
	
}


export default News