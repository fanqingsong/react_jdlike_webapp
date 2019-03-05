
import React from 'react';
import ReactDOM from 'react-dom';

import APPRouter from './app/router.js';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './app/reducers';
import thunk from 'redux-thunk';
import dataSourceMiddleware from "./app/middleware";

const store = createStore(rootReducer, applyMiddleware(thunk, dataSourceMiddleware))

import IntlWrapper from './app/Intl/IntlWrapper';

ReactDOM.render(
	<Provider store={store}>
		<IntlWrapper>
			<APPRouter/>
		</IntlWrapper>
	</Provider>,
	document.querySelector("#myApp")
);
