import axios from "axios/index";
import {ADD_TESTS_FIELDS} from '../types';

const BASE_URL = 'http://localhost:8000/api';

export function addTestsFields(values) {
    return async dispatch => {
        const url = BASE_URL + '/test/fields';
        try {
            console.log('val',values);
            const res = await axios.post(url, values);
            dispatch({
                type: ADD_TESTS_FIELDS,
                payload: res.data
            });
            console.log('added tests fields');
        }
        catch (error) {
            console.log(error);
        }
    }
}

