/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import jdapp from './modules/index/app';

import Header from './modules/header/headerContainer.js'; 
import Like from './modules/like/likeContainer.js'; 
import Otherapp from './modules/otherapp/otherappContainer.js'; 
import Spike from './modules/spike/spikeContainer.js'; 
import More from './modules/more/moreContainer.js'; 

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={jdapp}>
    <IndexRedirect to="/Header"/>
    <Route path='/Header' component={Header} />
    <Route path='/Like'  component={Like} />
    <Route path='/Otherapp'  component={Otherapp} />
    <Route path='/Spike'  component={Spike} />
    <Route path='/More'  component={More} />
  </Route>
);
