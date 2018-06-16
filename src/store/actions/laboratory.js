import axios from "axios/index";
import {
    GET_LABS,
    ADD_LABS,
    GET_LAB_DEPARTMENTS,
    GET_LAB_TYPES,
    ADD_LAB_DEPARTMENTS,
    ADD_LAB_TYPES,
    BASE_URL
} from '../types';




///////////////////// Laboratory manager ////////////////


export function getLabs() {
    return async dispatch => {
        const url = BASE_URL + '/labs';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_LABS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};


export function addLabs(values) {
    return async dispatch => {
        const url = BASE_URL + '/labs/';
        try {
            console.log('val', values);
            const res = await axios.post(url, values);
            dispatch({
                type: ADD_LABS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getLabDepartments() {
    return async dispatch => {
        const url = BASE_URL + '/lab-departments';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_LAB_DEPARTMENTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export function addLabDepartments(values) {
    return async dispatch => {
        const url = BASE_URL + '/lab-departments/';
        try {
            const res = await axios.post(url, { name: values});
            dispatch({
                type: ADD_LAB_DEPARTMENTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getLabTypes() {
    return async dispatch => {
        const url = BASE_URL + '/lab-types';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_LAB_TYPES,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};


export function addLabTypes(name) {
    return async dispatch => {
        const url = BASE_URL + '/lab-types/';
        try {
            const res = await axios.post(url, {
                name
            });
            dispatch({
                type: ADD_LAB_TYPES,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}