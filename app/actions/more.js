
import * as types from './types';

const moreAction = payload => ({
    type: types.UPDATE_MORE_IMAGE_URL,
    payload
})

const dataTransform = (data) => {
    console.log("enter !!!!!!!!!!!!!", data)
    return {
        more1: data.slice(0,3),
        more2: data.slice(3,5),
        more3: data.slice(5,7)
    }
}

export const moreAsyncAction = () => ({
    isDataMiddleware: true,
    dataPath: "data/more",
    dataTransform: dataTransform,
    syncAction: moreAction,
})
