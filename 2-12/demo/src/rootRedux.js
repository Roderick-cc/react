import { combineReducers } from 'redux';

//全局reducer
import isLogin from './indexRedux.js'
//子reducer
import NewsRedux from './page/news/NewsRedux.js'
import PageShowRedux from './page/pageshow/PageShowRedux.js'

//合并reducer
var rootRedux = combineReducers({
	isLogin,
	NewsRedux,
	PageShowRedux
})

export default rootRedux