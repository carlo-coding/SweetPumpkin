import { io }  from "socket.io-client";
import { SOCKET_URL } from "../../../chest/config";
import Parse from "parse";
const socket = io(SOCKET_URL, {reconnect: true});

async function getMessages({receiverId, senderId}) {
    const parseQuery = new Parse.Query("Chat");
    parseQuery.containedIn("senderId", [receiverId, senderId]);
    parseQuery.containedIn("receiverId", [receiverId, senderId]);
            
    const resp = (await parseQuery.findAll())
                 .map(res => res.toJSON());
    return resp;
}

async function saveMessage({receiverId, senderId, text}) {
    const message = new Parse.Object("Chat");
    message.set("receiverId", receiverId);
    message.set("senderId", senderId);
    message.set("text", text);
    message.save();
}
 
export default {
    socket,
    getMessages,
    saveMessage
};