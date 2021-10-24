import style from "styled-components";

export const AddFile = style.button`
    all: initial;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    padding: 0.4em .8em;
    background: #6A18B8;
    color: #FFF;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    box-sizing: border-box;
`;

export const Container = style.div`
    width: 250px;
    position: relative;
    margin: 0.3rem 0;
    border: 1px solid #6A18B8;
    overflow: hidden;
    border-radius: 0.2rem;
`;

export const ImagePreview = style.img`
    width: 100%;
    height: 200px;
    object-fit: scale-down;
`;

export const InfoContainer = style.div`
    display: flex;
    flex-direction: column;
`;

export const Info = style.p`
    margin: 0.2rem;
    font-size: 0.7rem;
`;

export const Error = style.p`
    margin: 0.1rem;
    font-size: 0.8rem;
    color: red;
`;