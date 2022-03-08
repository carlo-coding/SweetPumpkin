import * as React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { appendRating } from "../../../application/actions/blogs";
import { getBlogs, deleteBlog } from "../../../application/actions/blogs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai"; 
import { Rating } from "@mui/material";
import ReactTooltip from "react-tooltip";
import { BlogContent } from "./styles";
import { createId, calcRating, warningMessage } from "../../../chest/utils";


const Blog = ({blog})=> {
    const dispatch = useDispatch();
    const history = useHistory();

    const [rating, setRating] = React.useState(0);
    const [disabled, setDisabled] = React.useState(0);

    const handleChange = (e, newValue) => {
        setRating(newValue);
        dispatch(appendRating({rating: newValue, blogId: blog.objectId}));
        dispatch(getBlogs())
        setDisabled(true);
        window.localStorage.setItem(blog.objectId, newValue);
    }

    const handleDeleteBlog = async (blogId)=> {
        const confirmed = await warningMessage("¿Seguro que quieres eliminar este blog?");

        if(confirmed) {
            dispatch(deleteBlog(blogId));
            dispatch(getBlogs());
        }

    }

    React.useEffect(()=> {
        const value = window.localStorage[blog.objectId];
        if (value) {
            setDisabled(true);
            setRating(value)
        }
    }, [])

    return (
        <BlogContent>
            {blog.date && (
                <p>
                    <span>Fecha: {blog.date} </span>
                    <span>
                    <FiEdit 
                        data-tip="Editar blog"
                        size={25}
                        onClick={()=>history.push("/edit-blog/"+blog.objectId)}
                    />
                    <AiOutlineDelete 
                        data-tip="Eliminar blog"
                        size={25}
                        onClick={()=>handleDeleteBlog(blog.objectId)}
                    />
                    </span>
                </p>
            )}
            <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
            <div>
                ({calcRating(blog.ratings)})
                <Rating 
                    value={parseFloat(rating)}
                    onChange={handleChange}
                    disabled={Boolean(disabled)}

                />
            </div>
            <ReactTooltip />
        </BlogContent>
    )
}


export default Blog;