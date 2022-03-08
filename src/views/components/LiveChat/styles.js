import { styled } from "@mui/system";
import { TextField } from "@mui/material"; 

export const MessageInput = styled(TextField)`

`;

export const Messages = styled("div")`
    width: 400px;
    
    & > div:nth-of-type(1) {
        max-height: 50vh;
        margin-top: 1rem;
        overflow: auto;
    }

    & > div:nth-of-type(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em;
    }

    &  * {
        font-family: 'Poppins';
    }
`;

export const SendMessageButton = styled("span")`
    cursor: pointer;
    margin: 0 1em;
    padding: 0.5em;
`;

export const ReceiverMessage = styled("div")`
    display: flex;
    & > span {
        border-radius: 10px;
        padding: 0.2em 0.5em;
        margin: 0.1em;

        background:  #ebebeb ;
    }
`;

export const SenderMessage = styled("div")`
    display: flex;
    & > span {
        border-radius: 10px;
        padding: 0.2em 0.5em;
        margin: 0.1em;

        margin-left: auto;
        background:  #a9d7ff ;

    }
`;  