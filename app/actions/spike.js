
import axios from 'axios';

import * as types from './types';

const spikeAction = payload => ({
    type: types.UPDATE_SPIKE_IMAGE_URL,
    payload
})

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

export const spikeAsyncAction = () => {
    return (dispatch) => {
        let dataSource = "http://localhost:3000/data/spike";
        return axios.get(dataSource)
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                console.log(data)
                if(data.status) {
                    dispatch( spikeAction({
                        stores:  data.data,
                        more: data.more,
                    }) );

                    return data.times;
                }else {
                    console.log(data.msg);
                }
            })
            .then((times) => {
                times = +times;
                let timer = window.setInterval(() => {
                    let {hour, minutes, second} = formatTime(times--);
                    if(times == -1) {
                        clearInterval(timer);
                        timer = null;
                    }

                    dispatch( spikeAction({
                        hour: hour,
                        minutes: minutes,
                        second: second,
                    }) );
                }, 1000);

                // for cancellation
                return timer;
            })
            .catch(() => {
                console.log("fetch encounter error!");
            });	
    }
}
