
import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import AppComponent from './components/app.jsx';

import Header from './container/header.jsx'; 
import Otherapp from './container/otherapp.jsx'; 
import Spike from './container/spike.jsx'; 
import More from './container/more.jsx'; 
import Like from './container/like.jsx'; 

const APPRouter = () => {
    return (
		<Router history={hashHistory}>
			<Route path="/" component={AppComponent}>
				<IndexRedirect to="/Header"/>
				<Route path='/Header' component={Header} />
				<Route path='/Otherapp'  component={Otherapp} />
				<Route path='/Spike'  component={Spike} />
				<Route path='/More'  component={More} />
				<Route path='/Like'  component={Like} />
			</Route>
		</Router>
    );
}

module.exports = APPRouter;

