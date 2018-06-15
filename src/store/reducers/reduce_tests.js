import { ADD_TESTS, GET_TESTS} from './../types';


export default function(state = [], action) {
    switch (action.type) {

        case ADD_TESTS:
            return [ ...state, action.payload.data ];
        case GET_TESTS:
            return action.payload;
        default:
            return state;
    }


}

