import style from "styled-components";
export const Nav = style.nav`
    display: flex;
    align-items: center;
    background: #6314a8;
    width: 100%;
    & > * {
        margin: 0.3em 1em;
        text-decoration: none;
        color: #FFF;
    }
`