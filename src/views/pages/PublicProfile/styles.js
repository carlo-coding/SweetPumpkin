import style from "styled-components";
//background: #3C3A3E;
export const PageContainer = style.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
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