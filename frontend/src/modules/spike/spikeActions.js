
import * as types from '../config/actionTypes';

const spikeAction = payload => ({
    type: types.UPDATE_SPIKE_IMAGE_URL,
    payload
})

const dataTransform = (data, parent) => {
    console.log("enter !!!!!!!!!!!!!", data)

    return {
        stores: data,
        more: parent.more,
        times: parent.times,
    }
}

export const spikeAsyncAction = () => ({
    isDataMiddleware: true,
    dataPath: "data/spike",
    dataTransform: dataTransform,
    syncAction: spikeAction,
})

// refresh spike time by one second
// eslint-disable-next-line
const spikeTimeAction = () => ({
    type: types.INCREASE_SPIKE_ONE_SECOND
})

let timerHandle
export const spikeTimeRefreshStartAsyncAction = () => (dispatch) => {
    clearInterval(timerHandle);
    timerHandle = setInterval(()=>{
        // eslint-disable-next-line
        //dispatch(spikeTimeAction())
    }, 1000);
}

export const spikeTimeRefreshEndAsyncAction = () => (dispatch) => {
    clearInterval(timerHandle);
}
