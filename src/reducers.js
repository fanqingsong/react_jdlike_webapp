/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import intl from './modules/Intl/IntlReducer';

import likeImgs from './modules/like/likeReducers';
import headerImgs from './modules/header/headerReducers';
import otherappImgs from './modules/otherapp/otherappReducers';
import spikeImgs from './modules/spike/spikeReducers';
import moreImgs from './modules/more/moreReducers';

// Combine all reducers into one root reducer
export default combineReducers({
  intl,
  likeImgs,
  headerImgs,
  otherappImgs,
  spikeImgs,
  moreImgs
});
