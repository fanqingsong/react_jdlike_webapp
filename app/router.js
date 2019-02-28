
import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import AppComponent from './components/app.js';

import Header from './container/header.js'; 
import Otherapp from './container/otherapp.js'; 
import Spike from './container/spike.js'; 
import More from './container/more.js'; 
import Like from './container/like.js'; 

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

