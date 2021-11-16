import style from "styled-components";

export const PageContainer = style.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > *:nth-child(1) {
        margin: 2rem;
        width: 40%;
    }
`;

export const Grid = style.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

export const UserCard = style.div`
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px dashed blue;
    border-radius: 10px;
    padding: 1em;
    margin: 1em;

    & > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }

    & > div {
        display: flex;
        & > a {
            text-decoration: none;
            color: #333;
            padding: 0.2em 1.2em;
            margin: 0.2em;
            border: 1px solid blue;
            border-radius: 10px;    
        }
    }
`;