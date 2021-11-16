import { initializeParse, useParseQuery } from "@parse/react";
import Parse from "parse";
import { BACK4APP_SUBDOMAIN, APPLICATION_ID, JAVASCRIPT_KEY } from "../../config";
import { showError } from "../../../application/actions/alert";
import { useSelector, useDispatch } from "react-redux";

initializeParse( BACK4APP_SUBDOMAIN, APPLICATION_ID, JAVASCRIPT_KEY );

// 

export default function LiveChat({ receiver }) {
    const sender = useSelector(state=>state.users.data);

    const [text, setText] = React.useState("");

    const parseQuery = new Parse.Query("Chat");
    parseQuery.containedIn("sender", [receiver.userId, sender.id]);
    parseQuery.containedIn("receiver", [receiver.userId, sender.id]);
    parseQuery.ascending();
    parseQuery.includeAll();

    const sendMessage = ()=> {
        try {
            const message = new Parse.Object("Chat");
            message.set("receiver", receiver.userId);
            message.set("sender", sender.userId);
            message.set("text", text);
            message.save();
        }catch (err) {
            useDispatch(showError(err.message));
        }
    }


    const { isLive, isLoading, isSyncing, results, count, error, reload } = useParseQuery(parseQuery);

    return (
        <div>
            <div>
                {results?.map(r=>r.toJSON()).map(result=> (
                    <p>{result.text}</p>
                ))}
            </div>
            <textarea 
                value={text} 
                onChange={e=>setText(e.target.value)}
                placeholder="Excribe un mensaje"
            >
            </textarea>
            <button onClick={sendMessage}>Mandar</button>
        </div>
    );
}

