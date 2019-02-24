

import axios from 'axios';

import * as types from './types';

const moreAction = payload => ({
    type: types.UPDATE_MORE_IMAGE_URL,
    payload
})

export const moreAsyncAction = () => {
    return (dispatch) => {
        let dataSource = "http://localhost:3000/data/more";

        return axios.get(dataSource)
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                console.log(data)
                if(data.status) {
                    dispatch( moreAction({
                        more1: data.data.slice(0,3),
                        more2: data.data.slice(3,5),
                        more3: data.data.slice(5,7),
                    }) );
                }else {
                    alert(data.msg);
                }
            })
            .catch(() => {
                console.log("fetch encounter error!");
            });
    }
}
