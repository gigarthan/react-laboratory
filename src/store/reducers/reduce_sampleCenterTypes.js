//IT16139640

//reducers for sample center types

import { GET_SAMPLE_CENTER_TYPES, ADD_SAMPLE_CENTER_TYPES } from './../types';


export default function(state = [], action) {
    switch (action.type) {
        case GET_SAMPLE_CENTER_TYPES:
            return [ ...action.payload];

        case ADD_SAMPLE_CENTER_TYPES:
            return [ ...state, action.payload.data ];

        default:
            return state;
    }


}
