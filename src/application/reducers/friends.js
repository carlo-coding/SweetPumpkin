import { SET_FRIEND_REQUESTS, SET_FRIENDS } from "../actions/friends";

const initialState =  {
    friendRequests: [],
    friends: [],
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case SET_FRIEND_REQUESTS:
            return {...state, friendRequests: action.payload};
        case SET_FRIENDS:
            return {...state, friends: action.payload};
        default:
            return state;
    }
}

