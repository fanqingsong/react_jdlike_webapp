
import React from 'react';
import ReactDOM from 'react-dom';

import APPRouter from './app/router.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './app/reducers';

const store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<APPRouter/>
	</Provider>,
	document.querySelector("#myApp")
);
