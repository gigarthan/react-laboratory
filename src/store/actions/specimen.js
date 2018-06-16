import axios from 'axios';
import { BASE_URL, ADD_SPECIMEN, GET_ORDER } from '../types.js';
import Swal from 'sweetalert2'

const token = localStorage.getItem('user');
axios.defaults.headers.common['Authorization'] = `${token}`;

export function addSpecimen(id, values) {
    return async dispatch => {
        const url = BASE_URL + '/requests/' + id;
        try {
            const res = await axios.put(url, values);
            dispatch({
                type: ADD_SPECIMEN
            });
            Swal(
                'Success',
                'Specimen Added Successfully',
                'success'
              );
        }
        catch (error) {
            console.log('[ADD_SPECIMEN]', error);
            Swal(
                ':(',
                'Something went wrong!!!',
                'error'
              );
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