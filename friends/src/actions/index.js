// import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';

export const login = () => dispatch => {
    dispatch({type: LOGIN_START });
}
