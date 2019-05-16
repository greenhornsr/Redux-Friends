import axios from 'axios';

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
        console.log(res)
        dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
        localStorage.setItem('loginToken', res.data.payload)
    })
    .catch(err => {console.log(err)})
}
