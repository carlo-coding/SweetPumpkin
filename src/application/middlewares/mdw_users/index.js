import { GET_CURRENT_USER, CREATE_NEW_USER, LOGIN_USER, LOGOUT_USER ,setUserInfo } from "../../actions/users";
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
            console.log(resp);
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
            const resp = await api.users.logout();
            dispatch(setUserInfo({
                loggedIn: false,
                data: null
            }));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }
    next(action);
}