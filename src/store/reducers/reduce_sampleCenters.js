//IT16139640

//reducers for sample center

import { GET_SAMPLE_CENTERS } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_SAMPLE_CENTERS:
            return action.payload;
        default:
            return state;
    }


}



