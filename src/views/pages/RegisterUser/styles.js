import style from "styled-components";

export const PageContainer = style.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
 
    & > h4 { 
        font-weight: 500;
        font-size: 1.3rem;
        border-bottom: 1px solid #6A18B8;
        margin: 2rem;
    }

    & > form {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: minmax(100px, auto);
        width: 60%;

        & > div:nth-child(1) { /* Es el div que contiene a la seleccion de la imagen entre otros */
            & > * {
                margin: .5em 0;
            }
        }

        & > div:nth-child(3) { /* Es el div que contiene al boton*/
            grid-column: 1 / 3;

            display: flex;
            align-items: center;
        }
    }
`;

export const SubmitButton = style.button`
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
    width: 95%;
    margin: 1em 0;
    border-radius: 5px; 
`;


export const Textarea = style.textarea`
    width: 100%;
    height: 100px;
    border: 1px solid #582ECE;
`;

export const FormDiv = style.div`
    display: flex;
    flex-direction: column;
`;