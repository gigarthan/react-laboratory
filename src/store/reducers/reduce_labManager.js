//IT16139640

//reducers for lab manager

import { GET_LABS, ADD_LABS  } from './../types';


export default function(state = [], action) {
    switch (action.type) {

        case GET_LABS:
            return [ ...action.payload];

        case ADD_LABS:
            return [ ...state, action.payload.data ];

        default:
            return state;
    }


}
