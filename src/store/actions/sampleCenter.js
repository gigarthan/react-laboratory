import axios from "axios/index";
import {ADD_SAMPLE_CENTERS} from "../types";
const BASE_URL = 'http://localhost:8000/api';




export function addSampleCenters(values) {
    return async dispatch => {
        const url = BASE_URL + '/sample-centers';

        try {
            const res = await axios.put(values);
            dispatch({
                type: ADD_SAMPLE_CENTERS,
                //payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};
