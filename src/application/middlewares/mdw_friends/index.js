import { SEND_FRIEND_REQUEST, GET_FRIEND_REQUESTS, setFriendRequests } from "../../actions/friends";
import { showSuccess, showError } from "../../actions/alert";

export const flowSendFriendRequest = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === SEND_FRIEND_REQUEST) {
        try {
            const { message } = await api.friends.friendRequest(action.payload);
            dispatch(showSuccess(message))
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