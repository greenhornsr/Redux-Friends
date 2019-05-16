import axios from 'axios';

import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = () => dispatch => {
    dispatch({type: LOGIN_START });
    const creds = {
        username: 'Lambda School', 
        password: 'i<3Lambd4',
    }
    axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
        // console.log(res)
        dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
        localStorage.setItem('preciousToken', res.data.payload)
    })
    .catch(err => {console.log(err)})
}

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
        console.log(res);
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data })
    })
    .catch(err => {console.log(err)})
    // localStorage.clear();
}