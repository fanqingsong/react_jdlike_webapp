import { combineReducers } from 'redux'

import headerImgs from './header'
import likeImgs from './like'
import moreImgs from './more'
import otherappImgs from './otherapp'
import spikeImgs from './spike'

import intl from '../Intl/IntlReducer';

export default combineReducers({
    headerImgs,
    likeImgs,
    moreImgs,
    otherappImgs,
    spikeImgs,
    intl,
})
