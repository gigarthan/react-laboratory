import axios from 'axios';
import {GET_ORDER, GET_ORDERS} from '../types';
import { GET_LABS } from '../types';
import { GET_LAB_TEST_CATEGORIES } from '../types';
import { GET_SAMPLE_CENTERS } from '../types';
import {GET_TESTS} from "../types";
import {GET_BASIC_TESTS} from "../types";
import { GET_SAMPLE_CENTER_TYPES } from '../types';
import {GET_NOTIFICATIONS} from '../types';


import {VIEW_REQUESTS, ADD_ORDER} from '../types';
import { ADD_LAB_TEST_CATEGORY, BASE_URL, GET_TESTS_FIELDS } from './../types';

const token = localStorage.getItem('user');
axios.defaults.headers.common['Authorization'] = `${token}`;

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
};



///////////////////////////    TEST REQUESTS VIEW      ///////////////////////////////

export function viewOrderRequests() {
    return async dispatch => {
        const urlView = BASE_URL + '/requests';

        try {
            const res = await axios.get(urlView);
            dispatch({
                type: VIEW_REQUESTS

            });
        } catch (error) {
            console.log(error);
        }
    }
};


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


export function getAddedLabTestFields() {
    return async dispatch => {
        const url = BASE_URL + '/test/fields';

        try {
            const res = await axios.get(url);
            dispatch({
                type: GET_TESTS_FIELDS,
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
        const url = BASE_URL + '/test';

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

export function addLabTestCategories(values) {
    return async dispatch => {
        const url = BASE_URL + '/test-categories';

        try {
            const res = await axios.post(url, values);
            dispatch({
                type: ADD_LAB_TEST_CATEGORY,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

