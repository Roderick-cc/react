### react 异步处理：

​	对于简单的异步数据处理使用redux-thunk或者redux-promise,

​	对于复杂的异步交互，可以使用redux-saga 和redux-observable



### react动态的增加多个类名

```javascript
//react原生动态添加多个className会报错：

import style from './style.css'
<div className={style.class1 style.class2}</div>
想要得到最终渲染的效果是：<div class='class1 class2'></div>
```

解决方案：

引入classnames库，安装：npm install classnames --save。

```jsx
import classnames from 'classnames'
<div className=classnames({
    'class1': true,
    'class2': true
    )>
</div>
```

参考链接：https://blog.csdn.net/duola8789/article/details/71514450



### redux中的bindActionCreators

bindActionCreators作用是将单个或多个ActionCreator转化为dispath(action)的函数集合形式。开发者不用手动dispath(actionCreator(type)),而是可以直接调用方法

```javascript
//actionCreator.js如下：

export function addTodo(text) {
  return { type: 'ADD_TODO',text}
}
export function removeTodo(id) {
  return {type: 'REMOVE_TODO',id}
}
//导出的对象为：
{
   addTodo : text => {type: 'ADD_TODO',text},
   removeTodo : id => {type: 'REMOVE_TODO',id}
}
//是以函数名为key，函数为value的一个对象，经过bindActionCeators的处理变为：
{
    addTodo : text=>dispath(addtodo('text'));
    removeTodo : id => dispatch(removeTodo('id'));
}

```

案例：

app.js

```javascript
import * as types from '../constants/ActionTypes'
export const openSidebar = () => ({ type:types.OPENSIDEBAR })
```

header.js

```javascript

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as appActions from '$redux/actions/app'
import { bindActionCreators } from 'redux'
import 'assets/sass/header'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

class Header extends Component {
  static defaultProps = {
    title: '电影'
  }
  static propTypes = {
    title: PropTypes.string,
    actions: PropTypes.object
  }
  openSideBar = () => {
    this.props.actions.openSidebar()
  }
  render () {
    const { title } = this.props
    return (
      <nav id='header' data-flex='cross:center main:justify box:justify'>
        <a className='go-menu' onClick={this.openSideBar} href='javascript:;'>			<i className='iconfont icon-menu' /></a>
      </nav>
    )
  }
}
export default connect(undefined,mapDispatchToProps)(Header)
```



### connet

作用：连接React组件与 Redux store

react-redux 将组建分成了两大类：UI 组件和容器组件，

```
connect([mapStateToProps], [mapDispatchToProps], [mergeProps],[options])
```

```javascript
//connet方法的完整API 
import { connect } from 'react-redux'

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
//connet 接受两个参数：mapStateToProps和mapDispathToProps
//前者将state映射到UI组件的参数props
//后者 即将对用户对UI组件的操作映射成Action
```

mapStateToProps

作为函数，mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射。请看下面的例子。 

```javascript
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
```

mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染 



mapDispathToProps()

建立UI组件的参数到store.dispath方法的映射，定义了用户的操作当做Action，传给Store，它可以是一个函数，也可以是一个对象

如果是函数时

```javascript
const mapDispatchToProps = ( dispatch,ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      });
    }
  };
}
//返回一个对象，该对象的每个键值对都是一个映射，定义UI组件的参数怎样发出action
```

如果mapDispatchToProps是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出 

```javascript
const mapDispatchToProps = {
  onClick: (filter) => {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
}
```





### demo分析：

​	此项目采用create-react-app方式构建web : 

​	技术栈：react+react-router+redux

登录页面 首页  嵌套路由  倒叙 分页 退出登录 