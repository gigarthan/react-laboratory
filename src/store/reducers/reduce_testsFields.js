import { ADD_TESTS_FIELDS} from './../types';


export default function(state = [], action) {
    switch (action.type) {

        case ADD_TESTS_FIELDS:
            return [ ...state, action.payload.data ];

        default:
            return state;
    }


}

