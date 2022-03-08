import React, { useRef, useState } from 'react';
import { Container, ButtonsContainer } from "./styles";
import JoditEditor from "jodit-react";
import { useSelector, useDispatch } from "react-redux";
import { editBlog } from "../../../application/actions/blogs";
import { useHistory, useParams } from 'react-router'; 
import { warningMessage } from "../../../chest/utils";

export default function WriteBlog() {
    const dispatch  = useDispatch();
    const history = useHistory();
    const { blogId } = useParams();
    const blog = (useSelector(state=>state.blogs.all))
                .find(blog=>blog.objectId === blogId);

    const editor = useRef(null);
    const [content, setContent] = useState(blog?.content);
    const config = {
        readonly: false,
        height: 400,
    }

    const handleCancel = async ()=> {
        const confirm = await warningMessage("¿Quieres descartar los cambios?");
        if (confirm) {
            history.push("/profile");
        }
    }
    return (
        <Container>
            <h3>Editar publicación</h3>
            <JoditEditor 
                ref={editor}
                value={content}
                config={config}
                onBlur={newContent => setContent(newContent)}
                onChange={newContent =>{}}
            />
            <ButtonsContainer>
                <button onClick={_=>dispatch(editBlog({...blog, content}))}>Editar</button>
                <button onClick={handleCancel}>Cancelar</button>
            </ButtonsContainer>

        </Container>
    )
}
