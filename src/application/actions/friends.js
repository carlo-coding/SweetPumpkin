export const SEND_FRIEND_REQUEST = "[user] send friend request";
export const GET_FRIEND_REQUESTS = "[user] get friend request";
export const SET_FRIEND_REQUESTS = "[user] set friend request";

export const sendFriendRequest = (userId) => ({type: SEND_FRIEND_REQUEST, payload: userId});

export const getFriendRequests = () => ({type: GET_FRIEND_REQUESTS});

export const setFriendRequests = () => ({type: SET_FRIEND_REQUESTS});