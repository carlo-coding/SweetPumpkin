import style from "styled-components";

export const PageContainer = style.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Grid = style.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

export const UserCard = style.div`
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    padding: 1em;
    margin: 1em;

    & > img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
`;