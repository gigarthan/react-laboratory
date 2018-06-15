import { GET_NOTIFICATIONS, ADD_SPECIMEN } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_NOTIFICATIONS:
            return action.payload;
        default:
            return state;
    }


}