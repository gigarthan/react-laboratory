import axios from 'axios';
import {GET_ORDER, GET_ORDERS} from '../types';
import { GET_LABS } from '../types';
import { GET_LAB_TEST_CATEGORIES } from '../types';

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
}




///////////////////// Laboratory manager ////////////////


export function getLabs() {
    return async dispatch => {
        const url = BASE_URL + '/labs';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_LABS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};


export function addLabs(id) {
    return async dispatch => {
        const url = BASE_URL + '/labs/' + id;
        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_LABS,
                payload: res.data
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}


///////////////////// Lab test manager ////////////////


export function getLabTestCategories() {
    return async dispatch => {
        const url = BASE_URL + '/test-categories';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_LAB_TEST_CATEGORIES,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};
