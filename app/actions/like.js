

import axios from 'axios';

import * as types from './types';

const likeAction = payload => ({
    type: types.UPDATE_LIKE_IMAGE_URL,
    payload
})

export const likeAsyncAction = () => {
    return (dispatch) =>　{
        let dataSource = "http://localhost:3000/data/more";

        return axios.get(dataSource)
        .then((response) => {
            return response.data;
        })
        .then((data) => {
            console.log(data)
            if(data.status) {
                dispatch( likeAction(data.data) );
            }else {
                console.log(data.msg);
            }
        })
        .catch(() => {
            console.log("fetch encounter error!");
        });
    }
}


