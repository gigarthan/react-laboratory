import axios from "axios/index";

import {ADD_ORDER, GET_LAB_DETAILS} from "../types";

const BASE_URL = 'http://localhost:8000/api';


export function addNewRequest(values) {
    return async dispatch => {
        const url = BASE_URL + '/requests/';
        try {
            console.log('val',values);
            const res = await axios.post(url, values);
            dispatch({
                type: ADD_ORDER,
                payload: res.data
            });
            console.log('New Order Request Added.');
        }
        catch (error) {
            console.log(error);
        }
    }
}


export function getLabTestDetails() {
    return async dispatch => {
        const url = BASE_URL + '/field/test';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_LAB_DETAILS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};


