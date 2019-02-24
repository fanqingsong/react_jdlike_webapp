

import { UPDATE_SPIKE_IMAGE_URL } from '../actions/types';

let defaultState = {
	hour: "00",
	minutes: "00",
    second: "00",
	stores: [],
	more: ""
};

const spikeImgs = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_SPIKE_IMAGE_URL:
            console.log("enter UPDATE_SPIKE_IMAGE_URL");
            console.log("header images:", action.payload);
            return Object.assign({}, state, action.payload); 
        default:
            return state;
    }
}
  
export default spikeImgs


  