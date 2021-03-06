import axios from 'axios';

import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (creds) => dispatch => {
    console.log(creds)
    dispatch({type: LOGIN_START });
    // const creds = {
    //     username: 'Lambda School', 
    //     password: 'i<3Lambd4',
    // }
    return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
        // console.log(res)
        localStorage.setItem('preciousToken', res.data.payload)
        dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_FAILURE, payload: err.response.status })
    })
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
        localStorage.clear();
    })
    .catch(err => {console.log(err)})
}