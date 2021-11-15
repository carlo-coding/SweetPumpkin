import alert from "./alert";
import files from "./files";
import users from "./users";
import friends from "./friends";
import location from "./location";
import blogs from "./blogs";
import { combineReducers } from "redux";
//import ui from "./ui";

export default combineReducers({alert, files, users, location, friends, blogs})

