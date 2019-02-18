
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import AppComponent from './app.jsx';

import Header from './app/components/header.jsx'; 
import Otherapp from './app/components/otherapp.jsx'; 
import Spike from './app/components/spike.jsx'; 
import More from './app/components/more.jsx'; 
import Like from './app/components/like.jsx'; 

ReactDOM.render(
	<Router history={hashHistory}>
    	<Route path="/" component={AppComponent}>
			<IndexRedirect to="/Header"/>
			
			<Route path='/Header' component={Header} />
			<Route path='/Otherapp'  component={Otherapp} />
			<Route path='/Spike'  component={Spike} />
			<Route path='/More'  component={More} />
			<Route path='/Like'  component={Like} />
		</Route>
  	</Router>, 
	document.querySelector("#myApp")
);
