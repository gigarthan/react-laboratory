//IT16139640

//reducers for lab tests

import { GET_LAB_TESTS } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_LAB_TESTS:
            return action.payload;
        default:
            return state;
    }


}
