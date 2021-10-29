import { SET_LOCATION } from "../actions/location"

const initialState = {
    href: "",
    go: false,
}

const reducer = (state = initialState, action) => {
    if (action.type === SET_LOCATION) {
        return {href: action.payload.href, go: action.payload.go};
    }
    return state;
}

export default reducer;
