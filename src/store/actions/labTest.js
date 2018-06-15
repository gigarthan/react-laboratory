import axios from "axios/index";
import {ADD_TESTS} from '../types';
import {GET_LABORATORY} from "../types";

const BASE_URL = 'http://localhost:8000/api';

export function addTests(values) {
    return async dispatch => {
        const url = BASE_URL + '/test';
        try {
            console.log('val',values);
            const res = await axios.post(url, values);
            dispatch({
                type: ADD_TESTS,
                payload: res.data
            });
            console.log('added tests');
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function getLaboratory(values) {
    return async dispatch => {
        const url = BASE_URL + '/labs';
        try {
            console.log('val',values);
            const res = await axios.post(url, values);
            dispatch({
                type: GET_LABORATORY,
                payload: res.data
            });
            console.log('get labs');
        }
        catch (error) {
            console.log(error);
        }
    }
}