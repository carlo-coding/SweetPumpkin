import { SET_LOCATION } from "../actions/location"

const initialState = {
    href: "",
    go: false,
}

const reducer = (state = initialState, action) => {
    if (action.type === SET_LOCATION) {
        return action.payload;
    }
    return state;
}

export default reducer;
