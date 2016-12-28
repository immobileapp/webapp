import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Menu from 'menu';
import Home from 'home';
import Parked from 'parked';
import MyCars from 'myCars';
import History from 'history';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Menu}>
			<IndexRoute component={Home}/>
			<Route path="/home" component={Home}/>
			<Route path="/parked" component={Parked}/>
			<Route path="/myCars" component={MyCars}/>
			<Route path="/history" component={History}/>
		</Route>
	</Router>
), document.getElementById('main'))