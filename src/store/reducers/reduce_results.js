import { GET_TEST_RESULT_FIELDS } from '../types';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_TEST_RESULT_FIELDS:
            return {...state, fields: action.payload.fields, patient: action.payload.patient };
        default:
            return state;
    }
};