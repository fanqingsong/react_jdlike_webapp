

import axios from 'axios';

import * as types from './types';

const otherappAction = payload => ({
    type: types.UPDATE_OTHERAPP_IMAGE_URL,
    payload
})

export const otherappAsyncAction = () => ({
    isDataMiddleware: true,
    dataPath: "data/otherapp",
    dataTransform: data => data,
    syncAction: otherappAction,
})

