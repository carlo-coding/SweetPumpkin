import { flowCreateUser, flowLoginUser, flowGetCurrentUser, flowLogoutUser } from "./mdw_users";
import { flowUploadFile } from "./mdw_files";


export default [
    flowCreateUser, 
    flowUploadFile, 
    flowLoginUser, 
    flowGetCurrentUser, 
    flowLogoutUser
];