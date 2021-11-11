import style from "styled-components";

export const PageContainer = style.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
        width: 80%;
    }

    & > span {
        color: #FFC3BA;
    }
`;

