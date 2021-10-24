import style from "styled-components";

export const Input = style.input`
    outline: none;
    border: 1px solid #582ECE;
    padding: 1em;
    padding-bottom: 0.5em;
    padding-left: 0.5em;
    min-width: 100%;
    border-radius: 5px;
    margin: 0.4rem 0;
`;

export const InputContainer = style.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Error = style.p`
    color: red;
    margin: 0.1rem;
    font-size: 0.8rem;
    margin-left: 0.4rem;
    margin-bottom: 0.5rem;
`;