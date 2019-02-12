import { connect } from 'react-redux';

//=====引入组件=====
import PageShow from './PageShow.js'


//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
	return {
		isLogin:state.isLogin,
		list: state.PageShowRedux.list,
		allpage: state.PageShowRedux.allpage,
		currentpage: state.PageShowRedux.currentpage,
		nextpage: state.PageShowRedux.nextpage
	};
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
	return {
		GETLIST:function(currentpage){
			var list=[];
			var allpage="";
			var nextpage="";
			setTimeout(function(){
				//模拟ajax数据
				if(currentpage==1){
					list=[
						{id:1,text:"111111"},
						{id:2,text:"222222"},
						{id:3,text:"3333333333"},
						{id:4,text:"44444444444"},
						{id:5,text:"555555555"},
					]
					allpage=7
					nextpage=true;
				}else if(currentpage==2){
					list=[
						{id:1,text:"66666666"},
						{id:2,text:"7777777777"},
						{id:3,text:"8888888888"},
						{id:4,text:"99999999999"},
						{id:5,text:"101010"},
					]
					allpage=7
					nextpage=true;				
				}else if(currentpage==3){
					list=[
						{id:1,text:"111111111111111"},
						{id:2,text:"121212"},
						{id:3,text:"131313"},
						{id:4,text:"141414"},
						{id:5,text:"15515"},
					]
					allpage=7
					nextpage=true;				
				}else if(currentpage==4){
					list=[
						{id:1,text:"161616"},
						{id:2,text:"171717"},
						{id:3,text:"181818"},
						{id:4,text:"191919"},
						{id:5,text:"202020"},
					]
					allpage=7
					nextpage=true;				
				}else if(currentpage==5){
					list=[
						{id:1,text:"2121"},
						{id:2,text:"22222"},
						{id:3,text:"232323"},
						{id:4,text:"242424"},
						{id:5,text:"252525"},
					]
					allpage=7
					nextpage=true;				
				}else if(currentpage==6){
					list=[
						{id:1,text:"2626"},
						{id:2,text:"2727"},
						{id:3,text:"2828"},
						{id:4,text:"2929"},
						{id:5,text:"3030"},
					]
					allpage=7
					nextpage=true;				
				}else if(currentpage==7){
					list=[
						{id:1,text:"3131"},
						{id:2,text:"3232"}
					]
					allpage=7
					nextpage=false;				
				};
				dispatch({type:"GET_LIST",
						list:list,
						allpage:allpage,
						currentpage:currentpage,
						nextpage:nextpage})
			
			},200);
			
		}
	};
}

//封装传递state和dispatch
var PageShowReactRedux = connect(mapStateToProps,mapDispatchToProps)(PageShow);

export default PageShowReactRedux