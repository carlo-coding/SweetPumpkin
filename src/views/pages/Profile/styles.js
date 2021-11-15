import style from "styled-components";
//background: #3C3A3E;
export const PageContainer = style.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

    & > section { 
        outline: 2px solid #6314a8;
        position: relative;
        margin-top: 2rem;
        width: 70vw;
        height: 500px;
        overflow: hidden;
        border-radius: 10px;
        display: flex;
        
        @media (max-width: 702px) {
            order: 1;
        }

        & > span:nth-child(2) {
            position: absolute;
            left: 30%;
            top: 5%;
            background: red;
            color: #FFF;
            padding: 0.3em 0.5em;
        }

        & > span:nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 300px;
            padding: 0;
            height: 300px;

            & > img {
                width: 200px;
                height: 200px;
                border-radius: 50%;
                object-fit: cover;
                position: relative;
                z-index: 1000;
            }
            &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: inline-block;
                width: 210px;
                height: 210px;
                border-radius: 50%;
                background-image: linear-gradient(45deg, #6314a8 0%, #6314a8 50%, #fff 50%, #fff 100%);
            }
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
    min-width: 50%;
    padding: 0 1em;
    margin: auto 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #6314a8;
    border-radius: 10px;

    & > div {
        padding: 0.5em;
    }
`;

export const EditInfo = style.div`
    margin: 2rem 0 0 1em;
    width: 50px;
    height: 500px;
    position: relative;
    border-radius: 10px;
    background: #FFF;
    outline: 1px dashed #333;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 920px) {
        width: 70vw;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        order: 2;
    }

    & > a {
        display: flex;
        text-decoration: none;
        align-items: center;
        color: 6A18B8;
        margin: 0.6em 0;

        & > * {
            margin: 0 0.2rem;
        }

        margin: 1em 0.2em;
    }
`;

export const FRequests = style.div`
    width: 200px;
    height: 500px;
    border: 1px solid #582ECE;
    border-radius: 10px;
    margin: 0.5em;
    margin-top: 2rem;
    padding: 0.5em;

    @media (max-width: 702px) {
        order: 3;
        width: 70vw;
        height: 300px;
    }

    & > div {
        & div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            & > button, a {
                all: initial;
                font-family: inherit;
                font-size: 0.85rem;
                cursor: pointer;
                margin: 0 0.5em;
            }
            & > img {
                width: 30px;
                height: 30px;
                object-fit: cover;
                border-radius: 50%;
            }
            & > button { font-size: 0.6rem;}
        }
    }

`;

export const BlogsContainer = style.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    & > div {
        border: 1px solid #ccc;
        margin: 1em 0;
        padding: 1em;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;