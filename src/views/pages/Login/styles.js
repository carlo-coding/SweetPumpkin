import style from "styled-components";

export const PageContainer = style.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h4 { 
        font-weight: 500;
        font-size: 1.3rem;
        border-bottom: 1px solid #6A18B8;
        margin: 2rem;
    }

    & > form {
        width: 500px;
    }
`;

export const SubmitButton = style.button`
    all: initial;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    padding: 0.4em .8em;
    background: #6A18B8;
    color: #FFF;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-width: 100%;
    margin: 1em 0;
    border-radius: 5px;
`;
