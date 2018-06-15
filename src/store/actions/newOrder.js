import axios from "axios/index";

import {ADD_ORDER, GET_LAB_DETAILS, BASE_URL} from "../types";
import Swal from 'sweetalert2';


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
            Swal(
                'Success',
                'New Order Request Added',
                'success'
              );
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


