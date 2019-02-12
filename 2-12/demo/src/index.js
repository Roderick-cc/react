import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';


import { createStore } from 'redux';
import { Provider } from 'react-redux';

//reducers 状态树state和逻辑操作
import rootRedux from './rootRedux.js'

import App from './App.js';

import registerServiceWorker from './registerServiceWorker';


//创建状态树和设置

//生成状态树对象
const store = createStore(rootRedux,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

//start 状态树应用到全局 通过Provider
ReactDOM.render(
<Provider store={store}>
	<Router>
		<App />
	</Router>
</Provider>		
, document.getElementById('root'));
registerServiceWorker();
