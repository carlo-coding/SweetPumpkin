import style from "styled-components";

export const PageContainer = style.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & > p {
        width: 80%;
        text-align: center;
    }

    & > span {
        color: #FFC3BA;
    }

    & > img {
        margin: 2rem;
    }

    & > div {
        width: 400px;
        height: 400px;
    }
`;

