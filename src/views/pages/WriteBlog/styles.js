import style from "styled-components";

export const Container = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > div {
        width: 80% !important;
    }
`;


export const ButtonsContainer = style.div`
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0;

    & > button { 
        all: initial;
        font-family: inherit;
        padding: 0.5em 1em;
        margin: 0.5em;
        margin-right: 2em;
        cursor: pointer;
        background: #6314a8;
        color: #FFF;
    }

    & > button:nth-child(2) {
        background: #666;
    }
`;