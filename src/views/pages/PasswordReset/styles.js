import style from "styled-components";

export const PageContainer = style.div`
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;

    & > section {
        box-shadow: 5px 6px 23px -5px rgba(159,146,146,0.89);
        display: flex;
        flex-direction: column;
        padding: 1em;

        & > h4 {
            font-weight: 600;
            margin: 1em 0;
            padding: 0.6em 0;
            border-bottom: 1px solid rgba(159,146,146,0.4);
        }
        
        & > img {
            height: 200px;
            width: 400px;
            object-fit: cover;
        }

        & > input {
            all: initial;
            font: inherit;
            margin: 0.5em 0;
            padding: 0.5em;
            font-size: 0.9rem;
            border: 1px solid rgba(159,146,146,0.4);
        }

        & > button {
            all: initial;
            font: inherit;
            margin: 0.5em 0;
            padding: 0.5em;
            font-size: 0.9rem;
            border: 1px solid rgba(159,146,146,0.4);
            text-align: center;

            &:hover {
                background: rgba(159,146,146,0.3);
            }
        }
    }
`;

export const PasswordResetButton = style.button`

`;