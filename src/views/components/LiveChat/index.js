import React, { useEffect } from "react";
import { initializeParse, useParseQuery } from "@parse/react";
import Parse from "parse";
import { BACK4APP_SUBDOMAIN, APPLICATION_ID, JAVASCRIPT_KEY, HOST_URL } from "../../../chest/config";
import { showError } from "../../../application/actions/alert";
import { useSelector, useDispatch } from "react-redux";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { emitPrivateMessage, getMessages, registerUser } from "../../../application/actions/chat";
import useForceUpdate from 'use-force-update';
import { 
    MessageInput, 
    Messages, 
    SendMessageButton,
    ReceiverMessage,
    SenderMessage
 } from "./styles";
// 

export default function LiveChat({ receiver, openModal, setOpenModal }) {

    const forceUpdate = useForceUpdate();

    const messages = useSelector(state=>state.chat.messages);

    const sender = useSelector(state=>state.users.data);

    const dispatch = useDispatch();

    const [text, setText] = React.useState("");

    useEffect(()=> {
        dispatch(registerUser(sender.userId));
        dispatch(getMessages({
            senderId: sender.userId,
            receiverId: receiver.userId
        }));
    }, []);


    const handleMessage = ()=> {
        if (!text) return;
        dispatch(emitPrivateMessage({
            receiverId: receiver.userId,
            senderId: sender.userId,
            text
        }));
        setText(" ");
    }

    return (
        <Modal 
            open={openModal} 
            closeIcon={<AiOutlineCloseCircle />} 
            onClose={()=>setOpenModal(false)} 
            center
        >
            <Messages>
                <div>
                    {messages.map((msg, index)=> {
                        let isSender = (msg.senderId===sender.userId);
                        let messageAuthor = isSender? sender.name : receiver.name;
                        if (isSender) {
                            return (
                                <SenderMessage>
                                    <span>{msg.text}</span>
                                </SenderMessage>
                            )
                        }else {
                            return (
                                <ReceiverMessage>
                                    <span>{msg.text}</span>
                                </ReceiverMessage>
                            )
                        }
                        
                    })}
                </div>
                <div>
                    <MessageInput 
                        value={text} 
                        onChange={e=>setText(e.target.value)}
                        placeholder="Excribe un mensaje"
                    />

                    <SendMessageButton 
                        onClick={handleMessage}
                    >   Mandar
                    </SendMessageButton>
                </div>
            </Messages>
      </Modal>
    );
}

