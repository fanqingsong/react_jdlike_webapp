
import * as types from './types';

const headerAction = payload => ({
    type: types.UPDATE_HEADER_IMAGE_URL,
    payload
})

export const headerAsyncAction = () => ({
    isDataMiddleware: true,
    dataPath: "data/swiper",
    dataTransform: data => data,
    syncAction: headerAction,
})


