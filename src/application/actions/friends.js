export const SEND_FRIEND_REQUEST = "[friend] send friend request";
export const GET_FRIEND_REQUESTS = "[friend] get friend request";
export const SET_FRIEND_REQUESTS = "[friend] set friend request";
export const ACCEPT_FRIEND = "[friend] accept friend";
export const DECLINE_FRIEND = "[friend] decline friend";
export const DELETE_FRIEND = "[friend] delete friend";

export const sendFriendRequest = (userId) => ({type: SEND_FRIEND_REQUEST, payload: userId});

export const getFriendRequests = () => ({type: GET_FRIEND_REQUESTS});

export const setFriendRequests = (friends) => ({type: SET_FRIEND_REQUESTS, payload: friends});

export const declineFriend = (friend)=> ({type: DECLINE_FRIEND, payload: friend});

export const acceptFriend = (friend)=> ({type: ACCEPT_FRIEND, payload: friend});

export const deleteFriend = (friend)=> ({type: DELETE_FRIEND, payload: friend})