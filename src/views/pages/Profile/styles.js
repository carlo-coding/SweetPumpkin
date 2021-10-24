import style from "styled-components";

export const PageContainer = style.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    & > section {
        position: relative;
        background: #FFF;
        margin-top: 2rem;
        width: 700px;
        height: 500px;
        overflow: hidden;
        border-radius: 10px 50px;
        display: flex;

        & > img {
            width: 200px;
            height: 200px;
            margin: 1em;
            object-fit: cover;
            clip-path: polygon(0% 0%, 100% 0, 100% 70%, 70% 100%, 0% 100%);
        }
    }
`;


export const BackgroundGradient = style.div`
    margin-top: 2rem;
    width: 700px;
    height: 500px;  
    position: absolute;
    border-radius: 10px 50px;
    filter: blur(0.5rem);
    background: linear-gradient(#DD0DF5, #6A18B8, #22DFA6);
`;

export const UserInfo = style.div`
    height: 200px;
    padding: 0 1em;
    margin: auto 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > span {
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, #DD0DF5, #22DFA6 80%);
    }
`;