import { SET_FRIEND_REQUESTS } from "../actions/friends";

const initialState =  {
    friendRequests: [],
}

const reducer = (state = initialState, action) => {
    console.log("friends from reducer: ", action)
    switch (action.type) {
        case SET_FRIEND_REQUESTS:
            return {friendRequests: action.payload};
        default:
            return state;
    }
}


export default reducer;