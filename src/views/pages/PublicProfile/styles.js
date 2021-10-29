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
        width: 70vw;
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
    width: 70vw;
    height: 500px;  
    position: absolute;
    border-radius: 10px 50px;
    filter: blur(0.2rem);
    background: linear-gradient(#E30D0D, #6A18B8);
`;

export const UserInfo = style.div`
    height: 200px;
    min-width: 300px;
    padding: 0 1em;
    margin: auto 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
        padding: 0.5em;
    }

    & > span {
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, #DD0DF5, #DD0DF5);
    }
`;

export const EditInfo = style.div`
    margin-top: 3rem;
    width: 70vw;
    position: relative;
    border-radius: 10px 20px;
    background: #FFF;

    &::before {
        content: "";
        width: 100%;
        height: 100%;  
        position: absolute;
        border-radius: 10px 20px;
        filter: blur(0.2rem);
        background: linear-gradient(#E30D0D, #6A18B8);
        z-index: -1;
    }

    & > a {
        display: flex;
        text-decoration: none;
        align-items: center;

        & > * {
            margin: 0 0.2rem;
        }

        margin: 1em 0.2em;
    }
`;