import { GET_TESTS_FIELDS } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_TESTS_FIELDS:
            return action.payload;
        default:
            return state;
    }


}