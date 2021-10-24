import { FILE_INFO } from "../actions/files";

const initialState = {
    fileUrl: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FILE_INFO:
            console.log("FROM REDUCER", action.payload)
            return { fileUrl: action.payload };
        default: 
            return state;
    }
}

export default reducer