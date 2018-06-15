import { GET_ORDERS, ADD_SPECIMEN } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_ORDERS:
            return action.payload;
        default:
            return state;
    }
}
