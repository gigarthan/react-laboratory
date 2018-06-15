//IT16139640

//reducers for lab manager

import { GET_LAB_DEPARTMENTS,ADD_LAB_DEPARTMENTS } from './../types';


export default function(state = [], action) {
    switch (action.type) {
        case GET_LAB_DEPARTMENTS:
            return action.payload ;

        case ADD_LAB_DEPARTMENTS:
            return [ ...state, action.payload.data ];

        default:
            return state;
    }


}
