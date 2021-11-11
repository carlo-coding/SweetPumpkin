import { flowCreateUser, flowLoginUser, flowGetCurrentUser,
     flowLogoutUser, flowGetAllUsers, flowGetUserById, flowUpdateUser,
     flowUpdateUserImage, flowRequestPasswordReset } from "./mdw_users";

import { flowUploadFile } from "./mdw_files";


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
    flowRequestPasswordReset
];