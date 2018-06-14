//IT16139640

//reducers for sample center types

import { GET_SAMPLE_CENTER_TYPES } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_SAMPLE_CENTER_TYPES:
            return action.payload;
        default:
            return state;
    }


}
