import style from "styled-components";
//background: #3C3A3E;
export const PageContainer = style.div`
    width: 95vw;
    min-height: 100vh;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    & > div {
        width: 90%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
`;


export const UserInfo = style.div`
    height: 200px;
    min-width: 300px;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
        padding: 0.5em;
    }
`;

export const EditInfo = style.div`
    margin: 2rem 0 0 1em;
    height: 40px;
    width: 100%;
    position: relative;
    border-radius: 10px;
    background: #FFF;
    outline: 1px dashed #333;

    display: flex;
    align-items: center;


    & > a {
        display: flex;
        text-decoration: none;
        align-items: center;
        color: 6A18B8;

        & > * {
            margin: 0 0.2rem;
        }

        margin: 1em;
    }
`;

export const FRequests = style.div`
    max-height: 300px;
    width: 100%;
    border: 1px solid #582ECE;
    border-radius: 10px;
    margin: 0.5em;
    margin-top: 2rem;
    padding: 0.5em;
    overflow-y: auto;


    & > div {
        & > div {
            display: flex;
            flex-direction: column;
            max-height: 100px;
            overflow-y: auto;
            
            & > div{
                display: flex;
                align-items: center;
                margin: 0.3em 0;
                padding: 0.2em;
                border: 1px solid rgba(0,0,0, 0.2);
                border-radius: 10px;
            }
        }
    }

    & button, a {
        all: initial;
        font-family: inherit;
        font-size: 0.85rem;
        cursor: pointer;
        margin: 0 0.5em;
    }
    & img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 50%;
    }
    & button { font-size: 0.6rem;}

`;

export const BlogsContainer = style.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    overflow-x: auto;
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

export const ProfileSection = style.section`
        outline: 2px solid #6314a8;
        position: relative;
        margin-top: 2rem;
        min-height: 300px;
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        

        & > span:nth-child(2) {
            position: absolute;
            right: 0;
            top: 0;
            background: #F0AA1F;
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
`;