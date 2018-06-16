import axios from 'axios';
import { BASE_URL, AUTHENTICATED, AUTHENTICATION_ERROR, UNAUTHENTICATED } from '../types';

export function signin({
    username,
    password
}, history) {
    const url = BASE_URL + '/auth/signin';
    return async dispatch => {
        try {
            const res = await axios.post(url, {
                username,
                password
            });
            dispatch({
                type: AUTHENTICATED
            });
            localStorage.setItem('user', res.data.token);
            history.push('/');
        } catch (error) {
            console.log(error);
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid email or password'
            });
        }
    }
}

export function signout() {
    return async dispatch => {
        localStorage.removeItem('user');
        dispatch({
            type: UNAUTHENTICATED
        });
    }
}