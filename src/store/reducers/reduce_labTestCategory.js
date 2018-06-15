//IT16139640

//reducers for lab tests

import { GET_LAB_TEST_CATEGORIES } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_LAB_TEST_CATEGORIES:
            return action.payload;
        default:
            return state;
    }


}
