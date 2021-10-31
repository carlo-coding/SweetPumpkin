import st from "styled-components";


export const Fieldset = st.fieldset`
    display: flex;
    width: 50%;
    padding: 0;
    margin: 2em;
    & > div {
        dislay: flex;
        width: 100%;
        padding: 0.1em;
    }

    & > div > input {
        border: none;
        width: 100%;

        &:focus {
            outline: none;
        }
    }
`;