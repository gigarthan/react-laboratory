import { GET_BASIC_TESTS, ADD_SPECIMEN } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_BASIC_TESTS:
            return action.payload;
        default:
            return state;
    }


}