import axios from 'axios';

import * as types from './types';

const headerAction = payload => ({
    type: types.UPDATE_HEADER_IMAGE_URL,
    payload
})

export const headerAsyncAction = () => {
    return (dispatch) => {
        let dataSource = "http://localhost:3000/data/swiper";
        
        return axios.get(dataSource)
        .then((response) => {
            return response.data;
        })
        .then((data) => {
            console.log(data)
            if(data.status) {
                dispatch( headerAction(data.data) );
            }else {
                console.log(data.msg);
            }
        })
        .catch(() => {
            console.log("fetch encounter error!");
        });
    }
}

