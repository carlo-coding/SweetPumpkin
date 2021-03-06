import { GET_CURRENT_USER, CREATE_NEW_USER, LOGIN_USER, 
    LOGOUT_USER ,setUserInfo, GET_ALL_USERS, setUsers, 
    GET_USER_BY_ID, setFoundUser, UPDATE_USER, UPDATE_PROFILE_IMAGE,
    REQUEST_PASSWORD_RESET, SEND_FRIEND_REQUEST } from "../../actions/users";
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
            dispatch(setUserInfo(resp));
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

export const flowUpdateUser = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === UPDATE_USER) {
        try {
            const resp = await api.users.update(action.payload);
            dispatch(showSuccess(resp.message));
            dispatch(setUserInfo(action.payload));
            dispatch(setLocation({href: "/profile", go: true}));

        }catch(err) {
            dispatch(showError(err.message))
        }
    }

    next(action);
}

export const flowUpdateUserImage = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === UPDATE_PROFILE_IMAGE) {
        try {

            const fileUrl = await api.files.saveFile(action.payload);
            const user = await api.users.currentUser();

            await api.users.update({...user, fileUrl});
            
            const updatedUser = await api.users.currentUser();
            dispatch(setUserInfo(updatedUser));

        }catch(err) {
            dispatch(showError(err.message))
        }
    }

    next(action);
}

export const flowRequestPasswordReset = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === REQUEST_PASSWORD_RESET) {
        try {
            const { message } = await api.users.passwordReset(action.payload);
            dispatch(showSuccess(message));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }

    next(action);
}



