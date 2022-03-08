import { showError } from "../../actions/alert";
import { addMessage, EMIT_PRIVATE_MESSAGE, GET_MESSAGES, PRIVATE_MESSAGE_EVENT, REGISTER_USER, REGISTER_USER_EVENT, setMessages } from "../../actions/chat";

export const flowOnPrivateMessage = ({ chat }) => ({ dispatch }) => next => async action => {
    chat.socket.on(PRIVATE_MESSAGE_EVENT, data => {
        dispatch(addMessage(data));
    });
    next(action);
} 

export const flowSetMessages = ({ chat }) => ({ dispatch }) => next => async action =>{
    if (action.type === GET_MESSAGES) {
        try  {
            const messages = await chat.getMessages(action.payload);
            dispatch(setMessages(messages));
        }catch(err) {
            dispatch(showError(err.message));
        }
    }
    next(action);
}

export const flowSendMessage = ({ chat }) => ({ dispatch }) => next => async action =>{
    if (action.type === EMIT_PRIVATE_MESSAGE) {
        try {
            chat.socket.emit(PRIVATE_MESSAGE_EVENT, action.payload);
            await chat.saveMessage(action.payload);
            dispatch(addMessage(action.payload));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }
    next(action);
}

export const flowRegisterUser = ({ chat }) => ({ dispatch }) => next => async action =>{
    if (action.type === REGISTER_USER) {
        try {
            chat.socket.emit(REGISTER_USER_EVENT, action.payload);
        }catch(err) {
            dispatch(showError(err.message))
        }
    }
    next(action);
}