import { combineReducers } from 'redux'
import headerImgs from './header'
import likeImgs from './like'
import moreImgs from './more'
import otherappImgs from './otherapp'
import spikeImgs from './spike'

export default combineReducers({
    headerImgs,
    likeImgs,
    moreImgs,
    otherappImgs,
    spikeImgs
})
