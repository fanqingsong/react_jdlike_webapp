

import axios from 'axios';

import * as types from './types';

const otherappAction = payload => ({
    type: types.UPDATE_OTHERAPP_IMAGE_URL,
    payload
})

export const otherappAsyncAction = () => {
    return (dispatch) => {
        let dataSource = "http://localhost:3000/data/otherapp";
        
        return axios.get(dataSource)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			console.log(data)
			if(data.status) {
				dispatch( otherappAction(data.data) );
			}else {
				console.log(data.msg);
			}
		})
		.catch(() => {
			console.log("fetch encounter error!");
		});
    }
}
