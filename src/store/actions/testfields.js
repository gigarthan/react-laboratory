import { GET_TEST_RESULT_FIELDS, BASE_URL, ADD_TEST_RESULTS } from './../types';
import axios from 'axios';
import Swal from 'sweetalert2';


export function getTestResultFields(id) {
    return async dispatch => {
        const url = BASE_URL + `/test-results/${id}/`;

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_TEST_RESULT_FIELDS,
                payload: res.data
            });

        } catch (error) {
            console.log('[GET_TEST_RESULT_FIELDS]', error);
        }
    }
}

export function addTestResults(id, values) {
    return async dispatch => {
        const url = BASE_URL + `/test-results/${id}/`;

        try {
            const res = await axios.post(url, values);
            dispatch({
                type: ADD_TEST_RESULTS
            });
            Swal(
                'Success',
                'Test Results added',
                'success'
              );
        } catch( error ) {
            console.log('[ADD_TEST_RESULTS]', error);
        }
    }
}

