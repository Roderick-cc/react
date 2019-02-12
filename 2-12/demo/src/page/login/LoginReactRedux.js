import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
//=====引入组件=====
import Login from './Login.js'


//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
	return {}
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
	return {
		GOLOGIN:function(username,password,history){
			console.log("用户名"+username)
			console.log("密码"+password)
			setTimeout(function(){
				dispatch({type:"GO_LOGIN"})
				history.push("/Home")
			},1000)
			
		}
	};
}


//封装传递state和dispatch
var LoginReactRedux = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginReactRedux