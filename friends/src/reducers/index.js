import { LOGIN_START, LOGIN_SUCCESS, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
    friends: [],
    deletingFriend: false,
    fetchingFriends: false,
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_START:
        return {
            ...state,
            loggingIn: true,
        }
        case LOGIN_SUCCESS:
        return {
            ...state, 
            loggingIn: false,
        }
        case LOGIN_FAILURE:
        return{
            ...state,
            loggingIn: false,
            error: action.payload,
        }
        case FETCH_FRIENDS_START:
        return {
            ...state,
            fetchingFriends: true,
            error: null,
        }
        case FETCH_FRIENDS_SUCCESS:
        return {
            ...state,
            friends: action.payload,
            fetchingFriends: false,
            error: null,
        }
        default:
        return state;
    }
}