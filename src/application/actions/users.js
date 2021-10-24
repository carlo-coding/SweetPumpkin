export const CREATE_NEW_USER = "[user] create new user";
export const LOGIN_USER = "[user] login user";
export const SET_USER_INFO = "[user] set user info";
export const GET_CURRENT_USER = "[user] get current user";
export const LOGOUT_USER = "[user] log out";
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
