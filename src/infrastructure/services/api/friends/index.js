import Parse from "parse";
import { parseObjectToUser, createId } from "../../../../chest/utils";
import { APPLICATION_ID, HOST_URL , JAVASCRIPT_KEY, REST_API_KEY } from "../../../../chest/config"; 

function initializeParse() {
    Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
    Parse.serverURL = HOST_URL;
}

async function friendRequest(targetUserId) {
    initializeParse();
    const currentUser = await Parse.User.current().toJSON();
    const targetUser = await (new Parse.Query("User"))
                        .contains("userId", targetUserId)
                        .first();
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
    friendRequests.set("toUser", targetUser.toJSON());

    friendRequests.set("accepted", false);

    friendRequests.save();

    return {message: "Solicitud enviada"}
}

async function getFriendRequests() {
    const query = new Parse.Query("FriendRequests");
    const { userId } = await Parse.User.current().toJSON();
    query.contains("to", userId);


    const resp = (await query.find()) // Find 
                .map(res => res.toJSON()) // To Json
                .filter(res => res.accepted === false); // Only the requests that are not accepted yet

    return { friends: resp }
}

async function accept({ from, to }) {
    initializeParse();
    // Add friend to the list field on the user.
    const currentUser = await Parse.User.current();
    const friend = await (new Parse.Query("User"))
                        .contains("userId", from)
                        .first();

    const friends = currentUser.friends || [];

    currentUser.set("friends", [...friends, friend]);

    await currentUser.save();

    const FriendRequests = new Parse.Query("FriendRequests");
    FriendRequests.contains("from", from);
    FriendRequests.contains("to", to);
    const foundFriendR = await FriendRequests.first();
    foundFriendR.set("accepted", true);

    await foundFriendR.save()

    return {message: "Amigo añadido"}
}

async function decline({ to, from }) {
    // delete friend request from class in DB
    const FriendRequests = new Parse.Query("FriendRequests");
    FriendRequests.contains("from", from);
    FriendRequests.contains("to", to);

    const foundFriendR = await FriendRequests.first();
    await foundFriendR.destroy();

    return {message: "Solicitud eliminada"};
}
       
async function deleteFriend(friend) {
    const currentUser = await Parse.User.current();
    let friends = currentUser.toJSON().friends||[];
    friends = friends.filter(fr => fr.userId !== friend.userId);
    currentUser.set("friends", friends);
    currentUser.save();
    return {message: "Amigo eliminado"};
}


export default {
    friendRequest,
    getFriendRequests,
    accept,
    decline,
    deleteFriend
}

