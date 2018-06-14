import axios from 'axios';
import { GET_ORDERS } from '../types';

import {VIEW_REQUESTS} from '../types';

const BASE_URL = 'http://localhost:8000/api';

export function getOrders() {
    return async dispatch => {
        const url = BASE_URL + '/requests';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_ORDERS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};



//////////////////////////////////////--------------ERANDI --------------/////////////////////////////////////////////////////////////////

export function viewOrderRequests() {
    return async dispatch => {
        const urlView = BASE_URL + '/requests';

        try {
            const res = await axios.get(urlView);
            dispatch({
                type: VIEW_REQUESTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};
