

import { UPDATE_SPIKE_IMAGE_URL, INCREASE_SPIKE_ONE_SECOND } from '../actions/types';

let defaultState = {
	hour: "00",
	minutes: "00",
    second: "00",
	stores: [],
	more: ""
};

function formatTime(times=0) {
    times = +times;
    let hour = 0,
        minutes = 0,
        second = 0,
        regTwo = /^\d{2}$/,
        regInteger = /^(\d{1,2})\.?\d*$/;
    if(times/3600 >= 1) {
        hour = times/3600;
        hour = +regInteger.exec(hour.toString())[1] 
        times -= hour*3600; 
        hour = regTwo.test(hour.toString()) ? hour.toString() : `0${hour}`;
    }
    if(times/60 >= 1) {
        minutes = times/60;
        minutes = +regInteger.exec(minutes.toString())[1] 
        times -= minutes*60; 
        minutes = regTwo.test(minutes.toString()) ? minutes.toString() : `0${minutes}`;
    }
    second = times;
    second = regTwo.test(second.toString()) ? second.toString() : `0${second}`;
    return {
        hour: hour,
        minutes: minutes,
        second: second,
    }
}

const spikeImgs = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_SPIKE_IMAGE_URL:
        {
            console.log("enter UPDATE_SPIKE_IMAGE_URL");
            console.log("header images:", action.payload);

            let target = Object.assign({}, state, action.payload); 

            let times = +(action.payload.times);
            let {hour, minutes, second} = formatTime(times);
            target = Object.assign({}, target, {hour, minutes, second});

            return target;
        }
        case INCREASE_SPIKE_ONE_SECOND:
        {
            let times = +(action.payload.times);
            times = times + 1;
            let {hour, minutes, second} = formatTime(times);
            let target = Object.assign({}, state, {hour, minutes, second, times});

            return target;
        }
        default:
            return state;
    }
}
  
export default spikeImgs


  