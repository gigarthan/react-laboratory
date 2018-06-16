import axios from "axios/index";
import {GET_SAMPLE_CENTER_TYPES,ADD_SAMPLE_CENTER_TYPES, ADD_SAMPLE_CENTERS, GET_SAMPLE_CENTERS, BASE_URL} from '../types';






export function addSampleCenters(values) {
        return async dispatch => {
            const url = BASE_URL + '/sample-centers';
            try {
                console.log('val',values);
                const res = await axios.post(url, values);
                dispatch({
                    type: ADD_SAMPLE_CENTERS,
                    payload: res.data
                });
                console.log('added sample centers');
            }
            catch (error) {
                console.log(error);
            }
        }
    }


export function getSampleCenters() {
    return async dispatch => {
        const url = BASE_URL + '/sample-centers';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_SAMPLE_CENTERS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};



///////////////////// Sample center types ////////////////


export function getSampleCenterTypes() {
    return async dispatch => {
        const url = BASE_URL + '/sample-center-types';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_SAMPLE_CENTER_TYPES,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export function addSampleCenterTypes(values) {
    return async dispatch => {
        const url = BASE_URL + '/sample-center-types/';

        try {
            console.log('val',values);
            const res = await axios.post(url, values);
            dispatch({
                type: ADD_SAMPLE_CENTER_TYPES,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

