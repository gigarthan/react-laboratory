import { ADD_TESTS} from './../types';
import { GET_LABORATORY} from './../types';

export default function(state = [], action) {
    switch (action.type) {

        case ADD_TESTS:
            return [ ...state, action.payload.data ];
        case GET_LABORATORY:
            return action.payload;
        default:
            return state;
    }


}

