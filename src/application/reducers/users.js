import { SET_USER_INFO, SET_USERS, SET_FOUND_USER } from "../actions/users";

const initialState =  {
    loggedIn: false,
    data: null,
    foundUser: {},
    all: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            let newData = state.data? {...state.data, ...action.payload} : action.payload;
            return {loggedIn: Boolean(action.payload), data: newData};
        case SET_USERS:
            return {...state, all: action.payload};
        case SET_FOUND_USER: 
            return {...state, foundUser: action.payload};
        default:
            return state;
    }
}


export default reducer;