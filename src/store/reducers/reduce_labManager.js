//IT16139640

//reducers for lab manager

import { GET_LABS } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_LABS:
            return action.payload;
        default:
            return state;
    }


}
