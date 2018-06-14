import axios from 'axios';
import { BASE_URL, ADD_SPECIMEN, GET_ORDER } from '../types.js';

export function addSpecimen(values) {
    return async dispatch => {
        const url = BASE_URL + '/requests/specimen';
        try {
            const res = await axios.post(url, values);
            dispatch({
                type: ADD_SPECIMEN
            });
            console.log('added specimen');
        }
        catch (error) {
            console.log('[ADD_SPECIMEN]', error);
        }
    }
}

export function getDetails(id) {
    return async dispatch => {
        const url = BASE_URL + '/requests/' + id;
        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_ORDER,
                payload: res.data
            });
        }
        catch (error) {
            console.log('[ADD_SPECIMEN]', error);
        }
    }
}