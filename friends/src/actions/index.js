import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGGING_IN = 'LOGGING_IN';

export const login = () => dispatch => {
    dispatch({type: LOGIN_START });
    const creds = {
        username: 'Lambda School', 
        password: 'i<3Lambd4',
    }
    axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
        dispatch({type: LOGGING_IN, payload: res.data.payload})
        localStorage.setItem('loginToken', res.data.payload)
    })
    .catch(err => {console.log(err)})

}
