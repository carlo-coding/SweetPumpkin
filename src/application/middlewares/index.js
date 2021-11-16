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
    flowGetBlogs
} from "./mdw_blogs";

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
    flowGetBlogs
];