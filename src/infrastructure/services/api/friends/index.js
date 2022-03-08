import Parse from "parse";
import { parseObjectToUser, createId } from "../../../../chest/utils";
import { APPLICATION_ID, HOST_URL , JAVASCRIPT_KEY, REST_API_KEY } from "../../../../chest/config"; 

function initializeParse() {
    Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
    Parse.serverURL = HOST_URL;
}


async function friendRequest(targetUserId) {
    initializeParse();
    const currentUser = await Parse.User.current()?.toJSON();
    const targetUser = (await (new Parse.Query("User"))
                        .contains("userId", targetUserId)
                        .first())
                        .toJSON();
    // No mandar solicitud al usuario que la manda
    if (targetUserId === currentUser.userId) {throw new Error("No es posible mandar la solicitud")};
    const friendRequests = new Parse.Object("FriendRequests");

    // Evitar mandar solicitud si ya se mandó antes.
    const FriendRequests = new Parse.Query("FriendRequests");
    FriendRequests.contains("from", currentUser.userId);
    FriendRequests.contains("to", targetUserId);

    if ((await FriendRequests.first())) {throw new Error("Una solicitud ya ha sido enviada")} 

    friendRequests.set("from", currentUser.userId);
    friendRequests.set("to", targetUserId);

    friendRequests.set("fromUser", currentUser);
    friendRequests.set("toUser", targetUser);

    friendRequests.set("accepted", false);

    friendRequests.save();

    return {message: "Solicitud enviada"}
}

async function getFriendRequests() {
    const query = new Parse.Query("FriendRequests");
    const { userId } = await Parse.User.current().toJSON();
    query.contains("to", userId);


    const resp = (await query.find()) // Find 
                .map(res => res?.toJSON()) // To Json
                .filter(res => res.accepted === false); // Only the requests that are not accepted yet

    return { friends: resp }
}

async function getFriends(id) {
    console.log("🚀 ~ file: index.js ~ line 56 ~ getFriends ~ id", id)
    const query1 = new Parse.Query("FriendRequests");
    const query2 = new Parse.Query("FriendRequests");
    const { userId } = await Parse.User.current().toJSON();
    query1.equalTo("to", id || userId);
    query2.equalTo("from", id || userId);
    const orQuery = new Parse.Query.or(query1, query2);
    const resp = (await orQuery.find()) // Find 
                .map(res => res?.toJSON()) // To Json
                .filter(res => res.accepted === true)// Only the requests that are accepted
                .map(res => (res.from===userId)? res.toUser : res.fromUser);

    return { friends: resp }
}

async function accept({ from, to }) {
    console.log("🚀 ~ file: index.js ~ line 71 ~ accept ~  from, to",  from, to)
    initializeParse();
    const FriendRequests = new Parse.Query("FriendRequests");
    FriendRequests.contains("from", from);
    FriendRequests.contains("to", to);
    const foundFriendR = await FriendRequests.first();
    foundFriendR.set("accepted", true);
    foundFriendR.save();

    return {message: "Amigo añadido"}
}

async function decline({ to, from }) {
    // delete friend request from class in DB
    const frQuery1 = new Parse.Query("FriendRequests");
    const frQuery2 = new Parse.Query("FriendRequests");
    frQuery1.containedIn("from", [to, from]);
    frQuery2.containedIn("to", [to, from]);
    const FriendRequestsQuery = new Parse.Query.or(frQuery1, frQuery2);
    const foundFriendR = await FriendRequestsQuery.first();
    await foundFriendR.destroy();

    return {message: "Solicitud eliminada"};
}
       
async function deleteFriend(friend) {
    const { userId } = (await Parse.User.current()).toJSON();
    await decline({from: friend.userId, to: userId});
    return {message: "Amigo eliminado"};
}


export default {
    friendRequest,
    getFriendRequests,
    accept,
    decline,
    deleteFriend,
    getFriends
}

