import { 
    SEND_FRIEND_REQUEST, 
    GET_FRIEND_REQUESTS,
    DECLINE_FRIEND,
    ACCEPT_FRIEND,
    GET_FRIENDS,
    setFriendRequests, 
    DELETE_FRIEND,
    setFriends} from "../../actions/friends";
import { showSuccess, showError, showWarning } from "../../actions/alert";
import { setUserInfo } from "../../actions/users";

export const flowSendFriendRequest = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === SEND_FRIEND_REQUEST) {
        try {
            const { message } = await api.friends.friendRequest(action.payload);
            dispatch(showSuccess(message));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }

    next(action);
}

export const flowGetFriendRequests = ({ api, log }) => ({ dispatch }) => next => async action => {
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

export const flowGetFriends = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === GET_FRIENDS) {
        try {
            const { friends } = await api.friends.getFriends(action.payload);
            dispatch(setFriends(friends));
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
            const { friends } = await api.friends.getFriends(action.payload);
            const friendRequests = await api.friends.getFriendRequests();
            dispatch(setFriendRequests( friendRequests.friends ));
            dispatch(setFriends( friends ));
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
            const { friends } = await api.friends.getFriends();
            dispatch(showSuccess( message ));
            dispatch(setFriends(friends));
        }catch(err) {
            dispatch(showError(err.message))
        }
    }

    next(action);
}