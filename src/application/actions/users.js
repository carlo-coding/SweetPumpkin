export const CREATE_NEW_USER = "[user] create new user";
export const LOGIN_USER = "[user] login user";
export const SET_USER_INFO = "[user] set user info";
export const GET_CURRENT_USER = "[user] get current user";
export const LOGOUT_USER = "[user] log out";
export const GET_ALL_USERS = "[user] get all users";
export const SET_USERS = "[user] set users";
export const GET_USER_BY_ID = "[user] get user by id";
export const SET_FOUND_USER = "[user] set found user";
export const UPDATE_USER = "[user] update user";

export const createNewUser = (userData) => {
    return {
        type: CREATE_NEW_USER,
        payload: userData,
    }
}

export const loginUser = (userData) => {
    return {
        type: LOGIN_USER,
        payload: userData,
    }
}

export const setUserInfo = (userData) => {
    return {
        type: SET_USER_INFO,
        payload: userData,
    }
}

export const getCurrentUser = {type: GET_CURRENT_USER};

export const logOut = {type: LOGOUT_USER}

export const getAllUsers = {type: GET_ALL_USERS};

export const setUsers = (users) => ({type: SET_USERS, payload: users});

export const getUserById = (id) => ({type: GET_USER_BY_ID, payload: id});

export const setFoundUser = (user) => ({type: SET_FOUND_USER, payload: user});

export const updateUser  = (user) => ({type: UPDATE_USER, payload: user});