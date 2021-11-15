import { 
    SEND_FRIEND_REQUEST, 
    GET_FRIEND_REQUESTS,
    DECLINE_FRIEND,
    ACCEPT_FRIEND,
    setFriendRequests, 
    DELETE_FRIEND} from "../../actions/friends";
import { showSuccess, showError, showWarning } from "../../actions/alert";
import { setUserInfo } from "../../actions/users";

export const flowSendFriendRequest = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === SEND_FRIEND_REQUEST) {
        try {
            const { message } = await api.friends.friendRequest(action.payload);
            dispatch(showSuccess(message));
            log("FROM MDW")
        }catch(err) {
            dispatch(showError(err.message))
        }
    }

    next(action);
}

export const flowGetFriendRequests = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === GET_FRIEND_REQUESTS) {
        try {
            const { friends } = await api.friends.getFriendRequests();
            dispatch(setFriendRequests(friends));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }

    next(action);
}

export const flowDeclineFriend = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === DECLINE_FRIEND) {
        try {
            const { message } = await api.friends.decline(action.payload);
            const { friends } = await api.friends.getFriendRequests();

            dispatch(setFriendRequests( friends ));
            dispatch(showSuccess( message ));
        }catch(err) {
            dispatch(showError(err.message));
        }
    }

    next(action);
}

export const flowAcceptFriend = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === ACCEPT_FRIEND) {
        try {
            const { message } = await api.friends.accept(action.payload);
            const { friends } = await api.friends.getFriendRequests();

            dispatch(setFriendRequests( friends ));
            dispatch(showSuccess( message ));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }

    next(action);
}

export const flowDeleteFriend = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === DELETE_FRIEND) {
        try {
            const { message } = await api.friends.deleteFriend(action.payload);
            const user = await api.users.currentUser();
            
            dispatch(setUserInfo(user));
            dispatch(showSuccess( message ));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }

    next(action);
}