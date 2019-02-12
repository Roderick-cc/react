import React, { Component } from 'react';

//=====分页组件=====

class DiReactPage extends Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		//显示控制
		var currentpage=this.props.currentpage;
		var pages=[];
		if(this.props.allpage>=5){
			if(currentpage+5>this.props.allpage){
				for(var i=currentpage;i<=this.props.allpage;i++){
					pages.push(i);
				};
			}else{
				for(var i=currentpage;i<currentpage+5;i++){
					pages.push(i);
				};
			};
		}else{
			for(var i=currentpage;i<=this.props.allpage;i++){
				pages.push(i);
			};
		};	
		return (
			<div className="DiReactPage"  style={{display:this.props.allpage<=0?"none":"block"}}>
				<div className="DiReactPage-btn" onClick={this.diFirst.bind(this)}>第一页</div>
				<div className={this.props.currentpage==1?"DiReactPage-btn disable":"DiReactPage-btn"} onClick={this.diPrev.bind(this)}>上一页</div>
				<div className="DiReactPage-page">
					{
						pages.map(function(item,i){
							return <span key={i} className={currentpage==item?"active":""} onClick={this.diCurrent.bind(this,item)}>{item}</span>
						}.bind(this))
					}
				</div>
				<div className={this.props.currentpage==this.props.allpage?"DiReactPage-btn disable":"DiReactPage-btn"} onClick={this.diNext.bind(this)}>下一页</div>
				<div className="DiReactPage-btn"  onClick={this.diLast.bind(this)}>最后一页</div>
				<div className="DiReactPage-btn">总{this.props.allpage}页</div>
				<input className="DiReactPage-input" type="text" ref="cPage" />
				<button className="DiReactPage-skip"  onClick={this.diSkip.bind(this)}>跳转</button>
			</div>
		);
	}

	diFirst(){
		//alert(1)
		this.props.GETLIST(1);
	}
	diPrev(){
		//alert(this.props.currentpage-1)
		if(this.props.currentpage-1<1){
			return false;
		}
		this.props.GETLIST(this.props.currentpage-1);
	}
	
	diCurrent(page){
		//alert(page)
		this.props.GETLIST(page);
	}	
	
	diNext(){
		//alert(this.props.currentpage+1)
		if(this.props.currentpage+1>this.props.allpage){
			return false;
		}
		this.props.GETLIST(this.props.currentpage+1);
	}
	
	diLast(){
		//alert(this.props.allpage)
		this.props.GETLIST(this.props.allpage);
	}
	diSkip(){
		//alert(this.refs.cPage.value)
		if(isNaN(this.refs.cPage.value)){
			console.log("必须是数字")
			return false;
		}
		if(this.refs.cPage.value<1 || this.refs.cPage.value>this.props.allpage){
			console.log("超过范围")
			return false;
		}
		this.props.GETLIST(this.refs.cPage.value);
	}
	componentDidMount() {
	  	console.log("我是分页组件");
	}
	
}


export default DiReactPage