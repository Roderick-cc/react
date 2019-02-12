import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import NavReactRedux from './NavReactRedux.js';
import LoginReactRedux from './page/login/LoginReactRedux.js';
import HomeReactRedux from './page/home/HomeReactRedux.js';
import AboutReactRedux from './page/about/AboutReactRedux.js';
import NewsReactRedux from './page/news/NewsReactRedux.js';
import PageShowReactRedux from './page/pageshow/PageShowReactRedux.js';
import NotFind from './page/notFind/NotFind.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        	<NavReactRedux />
        	
			<div>
				<Switch>
					<Route exact path="/" component={LoginReactRedux}/>
					<Route exact path="/Home" component={HomeReactRedux}/>
					<Route path="/About" component={AboutReactRedux}/>
					<Route exact path="/News" component={NewsReactRedux}/>
					<Route exact path="/PageShow" component={PageShowReactRedux}/>				
					<Route component={NotFind}/>			
				</Switch> 
			</div>
      </div>
    );
  }
}

export default App;