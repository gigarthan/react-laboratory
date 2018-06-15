import axios from 'axios';
import {GET_ORDER, GET_ORDERS} from '../types';
import { GET_LABS } from '../types';
import { GET_LAB_TEST_CATEGORIES } from '../types';
<<<<<<< HEAD
import { GET_LAB_TESTS } from '../types';
=======
import { GET_SAMPLE_CENTERS } from '../types';
>>>>>>> ab301b904b6df557551f98d042ca6ac6dbd9178c
import {GET_TESTS} from "../types";
import {GET_BASIC_TESTS} from "../types";
import { GET_SAMPLE_CENTER_TYPES } from '../types';
import {GET_NOTIFICATIONS} from '../types';

const BASE_URL = 'http://localhost:8000/api';

export function getOrders() {
    return async dispatch => {
        const url = BASE_URL + '/requests';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_ORDERS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}


///////////////////// Sample centers ////////////////


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


export function addLabs(id) {
    return async dispatch => {
        const url = BASE_URL + '/labs/' + id;
        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_LABS,
                payload: res.data
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}


///////////////////// Lab test manager ////////////////


export function getLabTestCategories() {
    return async dispatch => {
        const url = BASE_URL + '/test-categories';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_LAB_TEST_CATEGORIES,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};


///////////////////// Get Lab test manager ////////////////


export function getAddedLabTests() {
    return async dispatch => {
        const url = BASE_URL + '/field/getFields';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_TESTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};


///////////////////// Get Lab test manager ////////////////


export function getBasicAddedLabTests() {
    return async dispatch => {
        const url = BASE_URL + '/field/test';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_BASIC_TESTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};



///////////////////// Get Notification manager ////////////////


export function getNotifications() {
    return async dispatch => {
        const url = BASE_URL + '/field/notification';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_NOTIFICATIONS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};