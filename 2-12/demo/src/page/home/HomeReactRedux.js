import { connect } from 'react-redux';

//=====引入组件=====
import Home from './Home.js'


//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
	return {
		isLogin:state.isLogin
	}
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
	return {
		OUTLOGIN:function(history){
			dispatch({type:"OUT_LOGIN"})
			history.push("/")
			
		}
	};
}

//封装传递state和dispatch
var HomeReactRedux = connect(mapStateToProps,mapDispatchToProps)(Home);

export default HomeReactRedux