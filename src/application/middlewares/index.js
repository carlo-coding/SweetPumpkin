import { 
    flowCreateUser, 
    flowLoginUser, 
    flowGetCurrentUser,
    flowLogoutUser, 
    flowGetAllUsers, 
    flowGetUserById, 
    flowUpdateUser,
    flowUpdateUserImage,
    flowRequestPasswordReset 
} from "./mdw_users";

import { 
    flowUploadFile 
} from "./mdw_files";

import { 
    flowSendFriendRequest, 
    flowGetFriendRequests,
    flowAcceptFriend,
    flowDeclineFriend,
    flowDeleteFriend,
    flowGetFriends
} from "./mdw_friends";

import {
    flowPostBlog,
    flowGetBlogs,
    flowAppendRating,
    flowDeleteBlog,
    flowEditBlog
} from "./mdw_blogs";

import {
    flowOnPrivateMessage,
    flowSetMessages,
    flowSendMessage,
    flowRegisterUser
} from "./mdw_chat";

export default [
    flowCreateUser, 
    flowUploadFile, 
    flowLoginUser, 
    flowGetCurrentUser, 
    flowLogoutUser,
    flowGetAllUsers,
    flowGetUserById,
    flowUpdateUser,
    flowUpdateUserImage,
    flowRequestPasswordReset,
    flowSendFriendRequest,
    flowGetFriendRequests,
    flowDeclineFriend,
    flowAcceptFriend,
    flowDeleteFriend,
    flowGetFriends,
    flowPostBlog,
    flowGetBlogs,
    flowAppendRating,
    flowDeleteBlog,
    flowEditBlog,
    flowOnPrivateMessage,
    flowSetMessages,
    flowSendMessage,
    flowRegisterUser
];