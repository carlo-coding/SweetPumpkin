import { SHOW_SUCCESS, SHOW_WARNING, SHOW_ERROR, RESET_ALERT } from "../actions/alert";

const initialState = {
    type: "",
    message: "",
    show: false,
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SHOW_SUCCESS: 
            return {type: "success", message: payload, show: true};
        case SHOW_WARNING: 
            return {type: "warning", message: payload, show: true};
        case SHOW_ERROR: 
            return {type: "error", message: payload, show: true};
        case RESET_ALERT: 
            return initialState;
        default: 
            return state;
    }
}

export default reducer;