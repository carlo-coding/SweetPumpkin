import style from "styled-components";
export const BlogContent = style.div`
    border: 1px solid #ccc;
    margin: 1em 0;
    padding: 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`;