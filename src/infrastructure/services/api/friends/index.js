import Parse from "parse";
import { parseObjectToUser, createId } from "../../../../chest/utils";
import { APPLICATION_ID, HOST_URL , JAVASCRIPT_KEY, REST_API_KEY } from "../../../../chest/config"; 

function initializeParse() {
    Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
    Parse.serverURL = HOST_URL;
}

async function friendRequest(userId) {
    initializeParse();
    const currentUser = await Parse.User.current().toJSON();
    const friendRequests = new Parse.Object("FriendRequests");

    friendRequests.set("from", currentUser);
    friendRequests.set("to", userId);
    friendRequests.set("accepted", false);

    friendRequests.save();

    return {message: "Solicitud enviada"}
}

async function getFriendRequests() {
    const query = new Parse.Query("FriendRequests");
    const { userId } = await Parse.User.current().toJSON();
    query.contains("to", userId);


    const resp = (await query.find()).map(res => res.toJSON().from);

    console.log("FRIENDS: ", resp);

    return { friends: resp }
}
       
export default {
    friendRequest,
    getFriendRequests
}