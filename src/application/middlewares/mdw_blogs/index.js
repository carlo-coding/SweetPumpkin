import { showSuccess, showError, showWarning } from "../../actions/alert";
import { setLocation } from "../../actions/location";

import { POST_BLOG, GET_BLOGS, setBlogs, APPEND_RATING, DELETE_BLOG, getBlogs, EDIT_BLOG } from "../../actions/blogs";

export const flowPostBlog = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === POST_BLOG) {
        try {
            const { message } = await api.blogs.post(action.payload);
            const allBlogs = await api.blogs.getAll();
            dispatch(setBlogs(allBlogs));
            dispatch(showSuccess( message ));
            dispatch(setLocation({href: "/profile", go: true}));
        }catch(err) {
            dispatch(showError(err.message));
        }
    }
    next(action);
} 

export const flowGetBlogs = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === GET_BLOGS) {
        try {
            const allBlogs = await api.blogs.getAll(action.payload);
            dispatch(setBlogs(allBlogs));
        }catch(err) {
            dispatch(showError(err.message));
        }
    }
    next(action);
}


export const flowAppendRating = ({api, log}) => ({ dispatch }) => next => async action => {
    if (action.type === APPEND_RATING) {
        try {
            await api.blogs.appendRating(action.payload);
        }catch(err) {
            dispatch(showError(err.message));
        }
    }
    next(action);
}


export const flowDeleteBlog = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === DELETE_BLOG ) {
        try {
            const { message } = await api.blogs.deleteBlog(action.payload);
            dispatch(showSuccess(message));
        }catch (err) {
            dispatch(showError(err.message));
        }
    }

    next(action);
}

export const flowEditBlog = ({ api, log }) => ({ dispatch }) => next => async action => {
    if ( action.type === EDIT_BLOG ) {
        try {
            const { message } = await api.blogs.editBlog(action.payload);
            dispatch(showSuccess(message));
            dispatch(setLocation({href: "/profile", go: true}))
        }catch(err) {
            dispatch(showError(err.message));
        }
    }

    next(action);
}