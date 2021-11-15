import React, { useRef, useState } from 'react';
import { Container, ButtonsContainer } from "./styles";
import JoditEditor from "jodit-react";
import { useSelector, useDispatch } from "react-redux";
import { postBlog } from "../../../application/actions/blogs";
import { useHistory } from 'react-router'; 

export default function WriteBlog() {
    const dispatch  = useDispatch();
    const history = useHistory();

    const editor = useRef(null);
    const [content, setContent] = useState("");
    const config = {
        readonly: false,
        height: 400,
    }
    return (
        <Container>
            <h3>Crea una nueva publicación</h3>
            <JoditEditor 
                ref={editor}
                value={content}
                config={config}
                onBlur={newContent => setContent(newContent)}
                onChange={newContent =>{}}
            />
            <ButtonsContainer>
                <button onClick={_=>dispatch(postBlog(content))}>Publicar</button>
                <button onClick={_=>history.push("/profile")}>Cancelar</button>
            </ButtonsContainer>

        </Container>
    )
}
