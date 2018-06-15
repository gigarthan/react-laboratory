//IT16139640

//reducers for lab tests

import { GET_LAB_TEST_CATEGORIES, ADD_LAB_TEST_CATEGORY } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_LAB_TEST_CATEGORIES:
            return action.payload;

        case ADD_LAB_TEST_CATEGORY:
            return [ ...state, action.payload.data ];
        default:
            return state;
    }


}
