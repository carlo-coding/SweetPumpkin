import { GET_CURRENT_USER, CREATE_NEW_USER, LOGIN_USER, 
    LOGOUT_USER ,setUserInfo, GET_ALL_USERS, setUsers, 
    GET_USER_BY_ID, setFoundUser } from "../../actions/users";
import { setLocation } from "../../actions/location";
import { showSuccess, showError } from "../../actions/alert";

export const flowCreateUser = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === CREATE_NEW_USER) {
        try {
            const resp = await api.users.saveUser(action.payload);
            dispatch(showSuccess(resp.message));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }
    next(action);
}

export const flowLoginUser = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === LOGIN_USER) {
        try {
            const resp = await api.users.login(action.payload);
            dispatch(showSuccess(resp.message));
            dispatch(setUserInfo(resp.user));
            dispatch(setLocation({href: "/profile", go: true}));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }
    next(action);
}

export const flowGetCurrentUser = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === GET_CURRENT_USER) {
        try {
            const resp = await api.users.currentUser();
            dispatch(setUserInfo(resp.user));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }
    next(action);
}

export const flowLogoutUser = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type ===  LOGOUT_USER) {
        try {
            await api.users.logout();
            dispatch(setUserInfo(null));
            dispatch(setLocation({href: "/", go: true}));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }
    next(action);
}

export const flowGetAllUsers = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === GET_ALL_USERS) {
        const users = await api.users.getAll();
        dispatch(setUsers(users))
    }
    next(action);
}
export const flowGetUserById = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === GET_USER_BY_ID) {
        const {user} = await api.users.byId(action.payload);
        dispatch(setFoundUser(user));
    }

    next(action);
}
