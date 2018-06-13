import { GET_ORDERS } from './../types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_ORDERS:
            return action.payload;   
        default:
            return state;
    }
}
