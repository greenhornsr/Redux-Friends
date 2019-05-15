import { LOGIN_START } from '../actions';

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
        default:
        return state;
    }
}