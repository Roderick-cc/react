import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import DiReactPage from '../../tpl/DiReactPage.js';
//=====组件=====

class PageShow extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		if(this.props.isLogin==false){
			return <Redirect to="/" />
		}
		
		return (
			<div>
				<h3>分页展示</h3>
				<ul style={{display:this.props.allpage<=0?"none":"block"}}>
					{
						this.props.list.map(function(item,i){
							return <li key={item.id}>
								<span>{item.text}</span>
							</li>
						})	
					}
				</ul>
				<div style={{display:this.props.allpage<=0?"block":"none"}}>没有数据了</div>
				<DiReactPage allpage={this.props.allpage} currentpage={this.props.currentpage} nextpage={this.props.nextpage}  GETLIST={this.props.GETLIST}/>
			</div>
		);
	}
	
	
	componentDidMount() {
	  	console.log("PageShow渲染完毕");
		this.props.GETLIST(1);
	}
	
}


export default PageShow