import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

import Menu from 'menu';
import Home from 'home';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Menu}>
			<IndexRoute component={Home}/>
			<Route path="/home" component={Home}/>
		</Route>
	</Router>
), document.getElementById('main'))