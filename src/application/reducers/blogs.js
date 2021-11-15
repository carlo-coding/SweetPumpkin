import { SET_BLOGS } from "../actions/blogs";

const initialState = {
    all: []
}

export default function reducer(state= initialState, action) {
    switch(action.type) {
        case SET_BLOGS:
            return {all: action.payload};
        default: 
            return state;
    }
}