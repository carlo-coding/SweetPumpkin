import { SET_MESSAGES, ADD_MESSAGE } from "../actions/chat"

const initialState = {
    messages: []
}

const chatReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_MESSAGES: 
            return {...state, messages: action.payload};
        case ADD_MESSAGE:
            if (state.messages[state.messages.length-1] === action.payload) return state
            let messages = [...state.messages, action.payload];
            return {...state, messages};
        default: 
            return state;
    }
}

export default chatReducer;