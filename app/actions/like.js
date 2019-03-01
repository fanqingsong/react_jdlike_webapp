
import * as types from './types';

const likeAction = payload => ({
    type: types.UPDATE_LIKE_IMAGE_URL,
    payload
})

export const likeAsyncAction = () => ({
    isDataMiddleware: true,
    dataPath: "data/like",
    dataTransform: data => data,
    syncAction: likeAction,
})



