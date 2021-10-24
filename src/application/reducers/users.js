import { SET_USER_INFO } from "../actions/users";

const initialState =  {
    loggedIn: false,
    data: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {loggedIn: true, data: action.payload};
        default:
            return state;
    }
}


export default reducer;