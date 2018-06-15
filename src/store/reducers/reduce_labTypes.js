//IT16139640

//reducers for lab manager

import { GET_LAB_TYPES,ADD_LAB_TYPES } from './../types';


export default function(state = [], action) {
    switch (action.type) {
        case GET_LAB_TYPES:
            return action.payload ;

        case ADD_LAB_TYPES:
            return [ ...state, action.payload.data ];

        default:
            return state;
    }


}
