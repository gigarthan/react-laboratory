import axios from "axios/index";
import {ADD_TESTS} from '../types';
import {GET_LABORATORY, BASE_URL, GET_TESTS } from "../types";



export function addTests(values) {
    return async dispatch => {
        const url = BASE_URL + '/test';
        try {
            const res = await axios.post(url, values);
            dispatch({
                type: ADD_TESTS,
                payload: res.data
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function getTests() {
    return async dispatch => {
        const url = BASE_URL + '/test';
        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_TESTS,
                payload: res.data
            });
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