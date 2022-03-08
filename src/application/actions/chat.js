export const EMIT_PRIVATE_MESSAGE = "[chat] emit private message";
export const GET_MESSAGES = "[chat] get messages";
export const ADD_MESSAGE = "[chat] add message";
export const SET_MESSAGES = "[chat] set messages";
export const REGISTER_USER = "[chat] register";
export const PRIVATE_MESSAGE_EVENT = "message:private_user";
export const REGISTER_USER_EVENT = "register";

export const emitPrivateMessage = (data)=> ({type: EMIT_PRIVATE_MESSAGE, payload: data}); // data = {receiver, sender, text}

export const getMessages = (data) => ({type: GET_MESSAGES, payload: data}); // data = {receiver, sender}

export const addMessage = (msg) => ({type: ADD_MESSAGE, payload: msg});

export const setMessages = (msgs) => ({type: SET_MESSAGES, payload: msgs});

export const registerUser = (userId) => ({type: REGISTER_USER, payload: userId});


