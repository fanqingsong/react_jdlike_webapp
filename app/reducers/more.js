

import { UPDATE_MORE_IMAGE_URL } from '../actions/types';

let defaultState = {
	more1: [],
	more2: [],
	more3: [],
};

const moreImgs = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_MORE_IMAGE_URL:
            console.log("enter UPDATE_MORE_IMAGE_URL");
            console.log("header images:", action.payload);
            return action.payload;
        default:
            return state;
    }
}
  
export default moreImgs


  